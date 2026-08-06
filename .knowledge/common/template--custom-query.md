# カスタムクエリテンプレート
カスタムクエリテンプレートの拡張子はcsxであり、C#スクリプト記法を使用します。
ルートスコープに存在する終端セミコロンの無い式を最終的な結果として返却します。

## テンプレート名
本リポジトリでは各テンプレートファイルはフォルダ分けされて管理されていますが、Commerbleに同期する際はtemplatesフォルダより下層のフォルダ名が結合したフラットな名称で登録されます。

例：
* templates/Query/Orders.csx -> QueryOrders

また、テンプレートファイル名に使用可能な文字列は `[a-zA-Z][a-zA-Z0-9_]*` のため、ASP.NETで規範的な部分ビューのファイル名に `_` プレフィックスを付与するルールは避ける必要があります。

## Request Object
現リクエストのSystem.Net.Http.HttpRequestMessageが取得できます。

```csx
using System;
using System.Linq;
using System.Web;

var qs = HttpUtility.ParseQueryString(Request.RequestUri.Query);
var parameter = qs.GetValues("s") ?? Array.Empty<string>();
```

## Database Object

`Database`オブジェクトを使用することで、CommerbleのCMS DB、EC DBの双方に対してReadクエリを発行し、データを検索・取得できます。

### Database.CMS

CMS DBに対して読み取り操作を行えます。`IEnumerable<TResult>`を取得する`Query`メソッドと`TResult`を取得する`Single`メソッドを利用できます。フロントテンプレートと異なりキャッシュされません。

```cshtml
@{
    var items = Database.CMS.Query(db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    var first = Database.CMS.Single(db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
}
```

CMS DBスキーマについては[$metadata--cms.xml](./$metadata--cms.xml)を参照してください。

### Database.EC
フロントテンプレートと異なりEC DBにフルの読み取り操作が行えます。
`IEnumerable<TResult>`を取得する`Query`メソッドと`TResult`を取得する`Single`メソッドを利用できます。

```cshtml
@{
    var items = Database.EC.Query(db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    var first = Database.EC.Single(db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
}
```

EC DBスキーマについては[$metadata--ec.xml](./$metadata--ec.xml)を参照してください。

## 実行方法

APIエンドポイントを呼び出し実行できます。レスポンスは`$format`クエリパラメータによりJSONとCSVを選択できます。ただし、CSVを利用する場合は、ネストのないフラットなTResultの配列 `TResult[]`もしくは、string辞書の配列`IDictionary<string, string>[]`である必要があります。


```pwsh
# .envファイルを読み込む
gci . | ?{ $_.Name -eq '.env' } | get-content | ?{ $_ -notlike '#*'} | %{ $key, $value = $_.split('=', 2); set-content env:\$key $value; }

# APIエンドポイント
$ep = $env:CBAPI_ENDPOINT

# API認証情報
$c = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $env:CBAPI_USERNAME, (ConvertTo-SecureString $env:CBAPI_PASSWORD -AsPlainText -Force)

# 実行テンプレート
$templateName = "QueryOrders"

# レスポンスフォーマット
$format = "json" ## or "csv"

# APIコール
irm "$ep/query/render?name=$templateName&`$format=$format" -Credential $c
```