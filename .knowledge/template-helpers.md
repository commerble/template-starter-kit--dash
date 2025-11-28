
# Template Helpers
テンプレートヘルパーはサイトテンプレートもしくはカートテンプレートで使用できるAPI関数です。

テンプレートヘルパーは標準でいくつかのAPI関数が利用できますが、有償カスタムにてカスタムヘルパーを作成できます。

## SystemTime

### 型：() => DateTime

### 例：
```
@{
    var now = Page.Template.SystemTime();
}
```

## Now
`SystemTime`を取得します。
### 型：DateTime

### 例：
```
@{
    var now = Page.Template.Now; // Page.Template.SystemTime()と等価
}
```

## TruncateNow
端数処理を行った日時を取得します。
### 型：(int? = null) => DateTime

### 例：
```
@{
    var defaultTruncated = Page.Template.TruncateNow(); // 標準設定 1分刻み
    var specificTruncated = Page.Template.TruncateNow(300); // 5分刻み
}
```

## RestartCounter
再起動カウンタ値を取得します。
### 型：int

### 例：
```
@{
    var rc = Page.Template.RestartCounter;
}
```

## SecuredHost
セキュアホストを取得します。  
商品ページは`http://www.example.com`で提供し、カート以降を`https://ssl.example.com`などのサブドメインで提供する時代がありました。  
SecuredHostという名称はHTTPページとHTTPSページが別ドメインで混在していたこの時代の名残です。  
この時代ではホストとSSLを使用するセキュアホストを区別する必要がありましたが、現代ではHTTPSのみで提供することが一般的でホストとセキュアホストが区別されることはありません。

### 型：(bool isSecure) => string
SSLを使用するかを真偽値で渡し、ホストURLを取得します。

### 例：
```
@{
    string host;
    host = Page.Template.SecuredHost(false); // http://www.example.com
    host = Page.Template.SecuredHost(true);  // https://www.example.com
}
```

### 型：(string routeName) => string
指定したルート情報のSSL必須フラグに基づきホストURLを取得します。

### 例：
```
@{
    string host;
    host = Page.Template.SecuredHost("ModdErrors");  // http://www.example.com
    host = Page.Template.SecuredHost("ModdDefault"); // https://www.example.com
}
```

### 型：(HttpContextBase context, bool isSecure) => string
現在使用しているポート番号を引き継いでホストURLを取得します。

### 例：
```
@{
    string host;
    host = Page.Template.SecuredHost(Page.Context, false); // http://www.example.com:80
    host = Page.Template.SecuredHost(Page.Context, true);  // https://www.example.com:443
}
```

## SecuredLink
ルート名とルートパラメータを指定して絶対URLを生成します。

### 型：(string routeName, object parameters) => string

### 例：
```
@{
    var action = Page.Template.SecuredLink("ModdPurchase", new { cart=cart.CartDefinition.CartId, action="Index"} );
}
```

## Cache
キャッシュデータがある場合はそれを取得し、ない場合はデータを生成します。

### 型： (string cacheKey, int expireSeconds, Func<TResult> cacheGetter) => TResult
キャッシュ時間（秒）を指定してキャッシュします。

### 例：
```
@{
    var cachedRandom = Page.Template.Cache("cachekey", 300, () => {
        var rand = new Random();
        return rand.Next();
    });
}
```

### 型： (string cacheKey,  DateTime expireTime, Func<TResult> cacheGetter) => TResult
指定日時までキャッシュします。

### 例：
```
@{
    var next = Page.Template.TruncateNow(300).AddSeconds(300);
    var cachedRandom = Page.Template.Cache("cachekey", next, () => {
        var rand = new Random();
        return rand.Next();
    });
}
```

### 型： (TCache cacheKey, int expireSeconds, Func<TResult> cacheGetter) => TResult
キャッシュ時間（秒）を指定してキャッシュします。

### 例：
```
@{
    var keyword = "keyword";
    var page = 0;
    var cachedRandom = Page.Template.Cache(new { keyword, page }, 300, () => {
        var rand = new Random();
        return rand.Next();
    });
}
```

### 型： (TCache cacheKey,  DateTime expireTime, Func<TResult> cacheGetter) => TResult
指定日時までキャッシュします。

### 例：
```
@{
    var keyword = "keyword";
    var page = 0;
    var next = Page.Template.TruncateNow(300).AddSeconds(300);
    var cachedRandom = Page.Template.Cache(new { keyword, page }, next, () => {
        var rand = new Random();
        return rand.Next();
    });
}
```

### 型：(TCache cacheKey) => TResult
キャッシュした値を取得します。存在しない場合は`default(TResult)`を返します。

### 例：
```
@{
    var keyword = "keyword";
    var page = 0;
    var data = Page.Template.Cache(new { keyword, page });
}
```

## GetModdUser
ユーザ情報を取得します。 認証情報等を持つため、本番環境で`ModdMembershipUser`をそのままJSON等にシリアライズすることは避ける必要があります。

### 型：() => ModdMembershipUser

### 例：
```
@{
    var user = Page.Template.GetModdUser();
    /* ModdMembershipUserの構造
    {
        IsAnonymous: bool,
        IsApproved: bool,
        LastLoginDate: DateTime,
        LastActivityDate: DateTime,
        CreationDate: DateTime,
        Account: {
            IsActive: bool,
            IsAnonymous: bool,
            UserNo: long,
            ExternalKeys: [
                {
                    RelateDate: DateTime,
                    UserNo: long,
                    AuthenticateType: Crosswarp.Modd.Account.ExternalAuthType(Local|CustomApi|OpenID),
                    LastLoginDate: DateTime?,
                    ExternalKey: string
                }
            ],
            Credential: {
                PasswardHashType: Crosswarp.Modd.Account.HashType(Clear|Encrypted|Hashed),
                Password: string
            },
            ExtendProperties: {
                Subscribe: true,
                AddressId: 3,
                MemberStatus: Crosswarp.Modd.Account.MemberStatus(Normal|Attention|Warning|Critical),
                Sex: Crosswarp.Modd.Account.HumanSexes(NotKnown|Male|Female|NotApplicable),
                Birthday: DateTime?,
                Token: string,
                FirstNameKana: string,
                LastNameKana: string,
                FirstName: string,
                LastName: string,
                Email: string
            },
            GetCustomApiExternalKey: string,
            QuitDate: DateTime?,
            ActivateDate: DateTime?,
            UserName: string
        },
        ProviderUserKey: object,
        UserName: string,
        Email: string
    }
    */
}
```

## GetProduct
内部商品IDを指定し、商品情報の取得します。

### 型：(int productId) => Product

### 例：
```
@{
    var product = Page.Template.GetProduct(1);
    /* Product
    {
        ProductId: int,
        Name: string,
        ExternalId: string, // ExternalId1と等価
        ExternalId1: string,
        ExternalId2: string,
        ExternalId3: string,
        ExternalId4: string,
        UnitPrice: decimal,
        TaxationPrice: decimal,
        SalesPatternID: int,
        SalesPattern: {
            SalesPatternId: int,
            PatternName: string
            CansetDeliveryHour: bool,
            CansetDeliveryDate: bool,
            CanGuestPurchase: bool,
            SinglePurchaseOnly: bool,
            StockControlMode: int,
            PointChargeRate: int,
            CartId: int,
            CartDefinition: {
                CartId: int
            },
            TaxRoundMode: Crosswarp.Modd.Models.TaxRoundMode(Round|Floor|Ceil|NoTaxCharge|UseTaxPrice|NoRound|Round8|Floor8|Ceil8|NoRound8|Round10|Floor10|Ceil10|NoRound10|UseTaxPrice8|UseTaxPrice10),
            PaymentMethodBits: int,
            PaymentMethods: Flags,
            MaxMailDeliveryPerOrder: int?,
            InternalStockPriority: int,
            MaxPurchasePerOrder: int?,
            MaxPurchasePerAccount: int?,
            MaxReserveRequestAmount: int?,
            EnableReserveOrder: bool,
            UserCancelEnable: bool,
            MemberRank: int?,
        },
        SetOnly: bool?,
        SetProductChildren: Crosswarp.Modd.Models.SetProductChild 
        { 
            Product: Product, 
            Amount: int, 
            DividePrice: decimal
        }[],
        SalesStatus: int?,
        ProductSalesStatus: Crosswarp.Modd.Models.SalesStatus(Sale|Stop|End),
        SalesEnd: DateTime?,
        SalesStart: DateTime?,
        ReleaseDate: DateTime?,
        ReReleaseDate: DateTime?,
        Cero: string,
        Categories: Crosswarp.Modd.Models.Category {
            CategoryID: int,
            CategoryGroupID: int,
            Name: string,
            ExternalCategoryName1: string,
            ExternalCategoryName2: string,
        }[]
    }
    */
}
```

## GetProductAmount
内部商品IDを指定し、商品の販売可能数を取得します。

### 型：(int productId) => int

### 例：
```
@{
    var stock = Page.Template.GetProductAmount(1);
}
```

## GetProductSalesPattern
内部商品IDを指定し、販売パターンの取得します。

### 型：(int productId) => SalesPattern

### 例：
```
@{
    var salesPattern = Page.Template.GetProductSalesPattern(1);
    /* SalesPattern
    {
        SalesPatternId: int,
        PatternName: string
        CansetDeliveryHour: bool,
        CansetDeliveryDate: bool,
        CanGuestPurchase: bool,
        SinglePurchaseOnly: bool,
        StockControlMode: int,
        PointChargeRate: int,
        CartId: int,
        CartDefinition: {
            CartId: int
        },
        TaxRoundMode: Crosswarp.Modd.Models.TaxRoundMode,
        PaymentMethodBits: int,
        PaymentMethods: Flags,
        MaxMailDeliveryPerOrder: int?,
        InternalStockPriority: int,
        MaxPurchasePerOrder: int?,
        MaxPurchasePerAccount: int?,
        MaxReserveRequestAmount: int?,
        EnableReserveOrder: bool,
        UserCancelEnable: bool,
        MemberRank: int?,
    }
    */
}
```

## GetPointChargeRate
内部商品IDを指定し、商品のポイント還元率を取得します。

### 型：(int productId) => int

### 例：
```
@{
    var rate = Page.Template.GetPointChargeRate(1);
}
```

## CanReserveRequest
内部商品IDを指定し、仮予約可能な商品かを判定します。

### 型：(int productId) => bool

### 例：
```
@{
    var reservable  = Page.Template.CanReserveRequest(1);
}
```

## GetUnitPriceWithTax
内部商品IDを指定し、商品の税込価格を計算します。

### 型：(int productId) => decimal

### 例：
```
@{
    var price = Page.Template.GetUnitPriceWithTax(1);
}
```

## GetDiscountPriceWithTax
内部商品IDと割引率(%)を指定し、商品の税込割引額を計算します。

### 型：(int productId, int discountRate) => decimal

### 例：
```
@{
    var discount = Page.Template.GetDiscountPriceWithTax(1, 30);
}
```

## GetDiscountedPriceWithTax
内部商品IDと割引率(%)を指定し、割引後の税込価格を計算します。

### 型：(int productId, int discountRate) => decimal

### 例：
```
@{
    var price = Page.Template.GetDiscountPriceWithTax(1, 30); // 3割引、30%オフ
}
```

## GetMakerPriceWithTax
内部商品IDと商品のメーカー希望小売価格を指定し、税込額を計算します。

### 型：(int productId, decimal price) => decimal

### 例：
```
@{
    var price = Page.Template.GetMakerPriceWithTax(1, 1000m);
}
```

## GetProductPaymentMethods
内部商品IDを指定し、商品の利用可能な決済方法一覧を取得します。

### 型：(int productId) => IEnumerable<PaymentMethod>

### 例：
```
@{
    var now = Page.Template.GetProductPaymentMethods(1);
}
```

## UnavailableCashOnDeliveryByZipCode
郵便番号を指定し、代引き不可地域か判定します。

### 型：(string zipCode) => bool

### 例：
```
@{
    var disallowed = Page.Template.UnavailableCashOnDeliveryByZipCode("1030014");
}
```

# UnavailableSetHourByZipCode
郵便番号を指定し、時間帯指定不可地域か判定します。

### 型：(string zipCode) => bool

### 例：
```
@{
    var disallowed = Page.Template.UnavailableSetHourByZipCode("1030014");
}
```

## UserIsInRole
ログインしているユーザがロールを保持しているか判定します。

### 型：(string roleName) => bool

### 例：
```
@{
    var hasRole = Page.Template.UserIsInRole("GoldMember");
}
```

## AppendUserToRole
ログインしているユーザにロールを付与します。

### 型：(string roleName, string roleParameter) => bool

### 例：
```
@{
    var result = Page.Template.AppendUserToRole("Campaign1", null);
}
```

## RemoveUserFromRole
ログインしているユーザからロールを取り除きます。

### 型：(string roleName) => bool

### 例：
```
@{
    var result = Page.Template.RemoveUserFromRole("Campaign1");
}
```

## GetRoleParameter
ログインしているユーザのロールパラメータ値を取得します。

### 型：(string roleName) => string

### 例：
```
@{
    var value = Page.Template.GetRoleParameter("Campaign1");
}
```

## GetProductCampaigns
内部商品IDを指定し、商品に紐づいている現在アクティブなキャンペーン情報を取得します。

### 型：(int productId) => IEnumerable<ActiveCampaign>

### 例：
```
@{
    var campaigns = Page.Template.GetProductCampaigns(1);
    /*
    {
        CampaignId: int,
        CampaignName: string,
        StartDate: DateTime,
        EndDate: DateTime,
        CampaignType: int,
        ApplyPrice: decimal?,
        BenefitItemCount: int,
        RemainItemCount: int,
        ConfigParameter: string
    }
    */
}
```

## UserHasBacklog: 
ログインしているユーザに進行中の受注が残っているか判定します。

### 型：() => bool

### 例：
```
@{
    var hasBacklog = Page.Template.UserHasBacklog();
}
```

## ZipCodeSearch
郵便番号を検索します。存在しない場合は`null`を返却します。

### 型：(string zipCode) => IEnumerable<ZipCodeAddress>

### 例：
```
@{
    var address = Page.Template.ZipCodeSearch("1030014");
}
```

## GetLoginUrl
システム指定しているログインURLを取得します。

### 型：() => string

### 例：
```
@{
    var url = Page.Template.GetLoginUrl();
}
```

## GetPrefecture
都道府県名を番号から取得します。

### 型：(int prefId) => string

### 例：
```
@{
    var tokyo = Page.Template.GetPrefecture(13); // 東京都
}
```

## RecaptchaRenderInclude
reCAPTCHAヘルパースクリプトをレンダリングします。引数に1つ以上の検証個所を指定します。

### 型：(string firstTarget, params string[] otherTargets) => HtmlString

### 例：
`Purchase/Create`が検証個所に設定されており、かつ、無効化されていない場合、レンダリングします。
```
@section ScriptBlock {
    @Page.Template.RecaptchaRenderInclude("Purchase/Create")
}
```