using System;
using System.Linq;

/**
 * 検索パッチデータ: 価格代表商品
 */

var now = DateTime.Now;

Database.CMS.Query(db =>
    from m in (
        from m in db.Searches
        where m.IsManual != true && m.PriceSalesEnd < now && m.PriceSalesEnd != m.MaxSalesEnd
        select m
    )
    from s in (
        from r in db.ProductRelations
        join s in db.Products on r.ExternalId1 equals s.ExternalId1
        where r.PageCode == m.PageCode && s.SalesStatus == 0 && (s.SalesEnd == null || s.SalesEnd > now)
        orderby s.UnitPrice
        select s
    ).Take(1).DefaultIfEmpty()
    let c = (
        from r in db.ProductRelations
        join s in db.Products on r.ExternalId1 equals s.ExternalId1
        where r.PageCode == m.PageCode && s.SalesStatus == 0 && (s.SalesEnd == null || s.SalesEnd > now)
        group s by s.UnitPrice into g
        select g.Key
    ).Count()
    select new {
        m.PageCode,
        PriceIndex = s.UnitPrice,
        PriceProductId = s.Id,
        PriceSalesEnd = s.SalesEnd,
        HasMultiplePrice = c > 1,
    }).Select(x => new {
        x.PageCode,
        x.PriceIndex,
        x.PriceProductId,
        x.HasMultiplePrice,
        PriceSalesEnd = x.PriceSalesEnd.HasValue ? new DateTimeOffset(x.PriceSalesEnd.Value).ToString("o") : (string)null,
    }).ToArray()