using System;
using System.Web;
using System.Linq;

/**
 * 検索パッチデータ: 販売可能数
 */

var qs = HttpUtility.ParseQueryString(Request.RequestUri.Query);

if (qs["from"] != null && !DateTimeOffset.TryParse(qs["from"], out var @from)) {
    throw new System.Web.HttpException(400, $"BadRequest: from = '{qs["from"]}'");
}

if (qs["to"] != null && !DateTimeOffset.TryParse(qs["to"], out var to)) {
    throw new System.Web.HttpException(400, $"BadRequest: to = '{qs["to"]}'");
}

var now = DateTime.Now;

Database.CMS.Query(db =>
    from r1 in (
        from p in db.Products
        join r1 in db.ProductRelations on p.ExternalId1 equals r1.ExternalId1
        where p.LimitAmountUpdatedAt >= @from.DateTime
           && p.LimitAmountUpdatedAt < to.DateTime
        select r1
    ).Distinct()
    join m in db.Searches on r1.PageCode equals m.PageCode
    from s in (
        from r2 in db.ProductRelations
        join s in db.Products on r2.ExternalId1 equals s.ExternalId1
        where r2.PageCode == r1.PageCode 
           &&  s.SalesStatus == 0 
           && (s.SalesEnd == null || s.SalesEnd > now)
        orderby s.LimitAmount descending
        select s
    ).Take(1).DefaultIfEmpty()
    where m.MaxLimitAmount != s.LimitAmount || (m != null && s == null)
    select new {
        r1.PageCode,
        MaxLimitAmount = s.LimitAmount,
    })