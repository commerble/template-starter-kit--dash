# フロントテンプレート
フロントテンプレートの拡張子はcshtmlであり、Razor記法を使用します。Razorについては [razor.md](./razor.md) を参照してください。

フロントテンプレートにはサイトテンプレートとカートテンプレートに大別されます。

* サイトテンプレート: Commerble CMSにより自由に新規作成、ルーティング指定が可能
* カートテンプレート: Commerble EC PaaSの組み込みコントローラによって利用される名称やビューモデルが固定されたテンプレート

## テンプレート名
本リポジトリでは各テンプレートファイルはフォルダ分けされて管理されていますが、Commerbleに同期する際はtemplatesフォルダより下層のフォルダ名が結合したフラットな名称で登録されます。

例：
* templates/Modd/Shared/Functions.cshtml -> ModdSharedFunctions
* templates/Layout/Default.cshtml -> LayoutDefault

また、テンプレートファイル名に使用可能な文字列は `[a-zA-Z][a-zA-Z0-9_]*` のため、ASP.NETで規範的な部分ビューのファイル名に `_` プレフィックスを付与するルールは避ける必要があります。

## Helpers
フロントテンプレートはウェブサイトのHTMLをレンダリングするためのテンプレートであり、Commerble側で用意されたいくつかのヘルパーを使用することができます。

## Page object
`Page`はテンプレート内で利用可能なオブジェクトインスタンスをまとめたラッパーインスタンスです。

フロントテンプレートの`Page`には以下のプロパティがあり、それぞれの用途で利用可能です。

* Context: 現リクエストのHttpContextオブジェクト (System.Web.HttpContext) ※
* Request: 現リクエストのRequestオブジェクト (System.Web.HttpRequest) ※
* Response: 現リクエストのResponseオブジェクト (System.Web.HttpResponse) ※
* Session: 現リクエストのSessionStateオブジェクト (System.Web.SessionState) ※
* ViewData: 現コンテキストのViewDataDictionaryオブジェクト (System.Web.Mvc.ViewDataDictionary)
* Html: 現コンテキストのHtmlHelperオブジェクト (System.Web.Mvc.HtmlHelper)
* Url: 現コンテキストのUrlHelperオブジェクト (System.Web.Mvc.UrlHelper)
* NoCache: 現リクエストのレスポンスに`System.Web.HttpCacheability.NoCache`をセットします (bool)
* User: 現リクエストのPrincipalオブジェクト (Systen.Sequrity.Principal.IPrincipal) ※
* Template: テンプレートヘルパー

※ 多くのサイトテンプレートでは、CDNでの再利用性を高めるため、Cookieが使用できません。  
そのためセッションの特定やユーザの特定を伴う操作はカートテンプレートでのみ実装する必要があります。  
また、サイトテンプレートでそれらの実装が必要な場合は有償カスタムにてCDNのキャッシュ設定を変更する申告が必要となります。

### Html Helpers
カートテンプレートでは、`Page.Html` によって、ASP.NET MVC `Html` オブジェクトを利用することができます。
また、`Page.Url` から同様にASP.NET MVC `Url` オブジェクトを利用することができます。

#### Links and URLs Helpers
```cshtml
<!-- Generates <a href="/Home/About">About Us</a> -->
@Page.Html.ActionLink("About Us", "About", "Home")

<!-- Generates /Home/Contact -->
@Page.Url.Action("Contact", "Home")
```

#### Forms
```cshtml
<form>
    @Page.Html.SessionAntiForgeryToken()
    @Page.Html.TextBox("input name", value, new { attr = "attr value" })
    @Page.Html.DropDownList("select name", 
                    Enumerable.Range(1,10)
                                .Select(i=>new SelectListItem{ Value=i+"", Text=i+"" }), "選択してください", new { attr = "attr value" })
    @Page.Html.CheckBox("checkbox name", checked, new { attr = "attr value" })
    @Page.Html.RadioButton("radio name", value, checked, new { attr = "attr value" })
</form>
```

#### Partial Views
HtmlHelperのPartialメソッドを使用して部分ビューをレンダリングできます。カートテンプレートではMvcコンテキストを引き継ぐために`Include`ではなくこちらを使用します。

```cshtml
@Page.Html.Partial("PartialLoginStatus", new { Message = "" })
@* Commerbleの独自拡張として、PartialExメソッドも利用でき、第3引数にViewDataを渡せます。*@
@Page.Html.PartialEx("PartialLoginStatus", new { Message = "" }, new { Prop1 = 1 })
```

### Template Helpers
テンプレートヘルパーはサイトテンプレートもしくはカートテンプレートで使用できるAPI関数です。

詳細は [template-helpers.md](./template-helpers.md) を参照してください。

## Database Object

`Database`オブジェクトを使用することで、Commerble CMSでテナントごと定義されたDBに対してReadクエリを発行し、CMSデータを検索・取得できます。


CMS DBスキーマについては[$metadata--cms.xml](./$metadata--cms.xml)を参照してください。ただし、名前空間とクラス名はXMLの値と異なるため匿名型や`@functions{}`ブロックに定義した独自の型に射影して使用します。

### Database.Query

DBに対してクエリを実行し、`IEnumerable<TResult>`を得ます。必ずキャッシュされるため、キャッシュを回避するにはキャッシュキーをカスタムする。

```cshtml
@{
    // 生成されたSQL文をもとにキャッシュキーとし、デフォルトのキャッシュ時間が適用される
    var example1 = Database.Query(db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    // キャッシュキーをカスタム
    var example2 = Database.Query(new { MyCacheKey = "Product(1)" }, db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    // ☆推奨： SQLがパラメータ化されコンパイル結果を使いまわせるため、使用を推奨
    var example3 = Database.Query(new { id = 1 }, (db, args) => 
        from p in db.Products
        where p.Id == args.id
        select new {
            p.Id,
            p.Name,
        }
    );
}
```

### Database.Single

DBに対してクエリを実行し、`TResult`を得ます。必ずキャッシュされるため、キャッシュを回避するにはキャッシュキーをカスタムする。

```cshtml
@{
    // 生成されたSQL文をもとにキャッシュキーとし、デフォルトのキャッシュ時間が適用される
    var example1 = Database.Single(db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
    // キャッシュキーをカスタム
    var example2 = Database.Single(new { MyCacheKey = "Product(1)" }, db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
    // ☆推奨： SQLがパラメータ化されコンパイル結果を使いまわせるため、使用を推奨
    var example3 = Database.Single(new { id = 1 }, (db, args) => (
        from p in db.Products
        where p.Id == args.id
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
}
```

### Database.Builder

```cshtml
@{
    var sort = Page.Request.QueryString["sort"] ?? "asc";
    
    // ベースとなるクエリを指定してクエリビルダーを生成 (i)
    var builder = Database.Builder(db =>
        from p in db.Products
        select new {
            p.Id,
            p.Name,
            p.UnitPrice
        }
    );

    // 条件に基づきクエリを追加
    if(sort == "desc") {
        builder.Append(q => q.OrderByDescending(p => p.UnitPrice)); (ii)
    }
    else {
        builder.Append(q => q.OrderBy(p => p.UnitPrice));
    }

    var cacheKey = new { sort };

    // カウントを取得
    var total = builder.Count(cacheKey);

    // カウントを取った後、取得件数を絞るクエリを追加する (iii)
    builder.Append(q => q.Take(10));
    
    // 取得件数分だけDBから取得する
    var items = builder.Execute(cacheKey);

    /*
    -- クエリビルダーではAppendするたびに現クエリをFROMとしたフィルタが積み重なります。
    (
        -- (iii)
        SELECT TOP(10) *
        FROM (
            -- (ii)
            SELECT *
            FROM (
                -- (i)
                SELECT Id, Name, UnitPrice
                FROM Products
            )
            ORDER BY UnitPrice DESC
        )
    )
    */
}
``

## 共有テンプレート

一部のテンプレートはCommerble内部で実行時に他のテンプレートと文字列結合されます。このテンプレートを共有テンプレートと呼称し、多くのテナントでは以下のテンプレートが共有テンプレートとして設定されています。

* ModdSharedViewStart
* ModdSharedFunctions
* ModdSharedHelpers

※ ModdShared接頭辞があるからと必ずしも共有テンプレートであるとは限りません。 本リポジトリでは`sync.ts`の`sharedTemplates`設定で確認できます。

## ルートパラメータ

CMS管理画面からルーティング設定を行うことで、`ViewBag`からルートパラメータを受け取れます。

```cshtml
@*
 CMS管理画面のルーティング設定にて、
 このテンプレートに対して、 `dev/{Param1}/{*Params}` URLパターンを設定済みとする
 また、Param1は整数値、ParamsはURL文字列として型設定も登録済みとする
*@

@{
    var param1 = (int)ViewBag.Param1;
    var @params = (string)ViewBag.Params;
}
```

## 実行方法
フロントテンプレートはどのようなURLにマップされるかは管理画面のルーティング設定に左右されるため、もしあなたがAIエージェントである場合は確認作業を人間の作業者に依頼してください。