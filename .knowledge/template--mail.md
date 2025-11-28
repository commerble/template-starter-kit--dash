# メールテンプレート
メールテンプレートの拡張子はcshtmlであり、Razor記法を使用します。Razorについては [razor.md](./razor.md) を参照してください。

メールテンプレートとフロントテンプレートは双方ともに拡張子がcshtmlであり、リポジトリ内のファイル情報から区別する方法はフォルダの配置ルールのみです。メールテンプレートは必ず、`sync.js`の`mailTemplatePrefix`で設定されたフォルダに配置します。大抵の場合は`Mail`が設定されており、`templates/Mail/` 配下のcshtmlファイルはすべてメールテンプレートとみなします。

## テンプレート名
本リポジトリでは各テンプレートファイルはフォルダ分けされて管理されていますが、Commerbleに同期する際はtemplatesフォルダより下層のフォルダ名が結合したフラットな名称で登録されます。

例：
* templates/Mail/CustomerOrderPc.cshtml -> MailCustomerOrderPc
* templates/Mail/AdminInquiryContact.cshtml -> MailAdminInquiryContact

また、テンプレートファイル名に使用可能な文字列は `[a-zA-Z][a-zA-Z0-9_]*` のため、ASP.NETで規範的な部分ビューのファイル名に `_` プレフィックスを付与するルールは避ける必要があります。

## 共有テンプレート
メールテンプレートにフロントテンプレートのようなCommerble内部で自動的に文字列結合される共有テンプレート機能は存在しません。 しかし、`sync.js` で疑似的に再現されており、 `sync.js`の`mailSharedTemplatePath`設定で指定されたテンプレートが各メールテンプレートの先頭に文字列結合された上で同期されるため共通ロジックはこのファイルに記載します。

## ViewBag.Parameters
メールテンプレートのレンダリング引数は`ViewBag.Parameters`にstringの辞書として格納されます。

```cshtml
@{
    var orderId = long.Parse((string)ViewBag.Parameters["orderId"]);
}
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

レンダリングAPIエンドポイントを呼び出すことで、実際にメールを送信することなくレンダリング結果のみを確認できます。


```pwsh
# .envファイルを読み込む
gci . | ?{ $_.Name -eq '.env' } | get-content | ?{ $_ -notlike '#*'} | %{ $key, $value = $_.split('=', 2); set-content env:\$key $value; }

# APIエンドポイント
$ep = $env:CBAPI_ENDPOINT

# API認証情報
$c = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $env:CBAPI_USERNAME, (ConvertTo-SecureString $env:CBAPI_PASSWORD -AsPlainText -Force)

# 実行テンプレート
$templateName = "MailCustomerOrderPc"

# リクエストボディ
$body = @{
    RequestState = @{
        Parameters = @{ orderId = "3" };
        RequestId = 0;
        MailMessage = @{};
        MailRequest = @{
            Id = 0;
            MailType = 0;
            TemplateName = $templateName;
            SendAt = (Get-Date -Format "o");
            Sender = "sender@invalid";
            Recipient = "recipient@invalid";
            RelateId = $null;
            UserNo = $null;
            TemplateData = "";
        };
        MailHistory = $null;
    };
    SubjectEncoding = $true;
}

# APIコール
irm -Method Post -Uri "$ep/mail/render" -Credential $c -ContentType "application/json" -Body (ConvertTo-Json $body)
```