
# Template Helpers
Template helpers are API functions available in site and cart templates.

Several API functions are available by default, and custom helpers can be created as paid customizations.

## SystemTime

### Type: `() => DateTime`

### Example:
```
@{
    var now = Page.Template.SystemTime();
}
```

## Now
Gets the `SystemTime` value.
Gets the `SystemTime` value.
### Type: `DateTime`

### Example:
```
@{
    var now = Page.Template.Now; // Equivalent to Page.Template.SystemTime()
}
```

## TruncateNow
Gets the current time with truncation applied.
### Type: `(int? = null) => DateTime`

### Example:
```
@{
    var defaultTruncated = Page.Template.TruncateNow(); // Default: one-minute increments
    var specificTruncated = Page.Template.TruncateNow(300); // Five-minute increments
}
```

## RestartCounter
Gets the restart counter value.
### Type: `int`

### Example:
```
@{
    var rc = Page.Template.RestartCounter;
}
```

## SecuredHost
Gets the secure host.
There was a time when product pages were served from `http://www.example.com` and later cart pages from a subdomain such as `https://ssl.example.com`.
The name `SecuredHost` is a remnant of that period when HTTP and HTTPS pages used different domains.
At that time, it was necessary to distinguish the host from the SSL-enabled secure host. Today, HTTPS-only delivery is common, so the host and secure host are not distinguished.

### Type: `(bool isSecure) => string`
Passes whether to use SSL as a Boolean and returns the host URL.

### Example:
```
@{
    string host;
    host = Page.Template.SecuredHost(false); // http://www.example.com
    host = Page.Template.SecuredHost(true);  // https://www.example.com
}
```

### Type: `(string routeName) => string`
Returns the host URL based on the SSL-required flag for the specified route.

### Example:
```
@{
    string host;
    host = Page.Template.SecuredHost("ModdErrors");  // http://www.example.com
    host = Page.Template.SecuredHost("ModdDefault"); // https://www.example.com
}
```

### Type: `(HttpContextBase context, bool isSecure) => string`
Returns the host URL while preserving the port number currently in use.

### Example:
```
@{
    string host;
    host = Page.Template.SecuredHost(Page.Context, false); // http://www.example.com:80
    host = Page.Template.SecuredHost(Page.Context, true);  // https://www.example.com:443
}
```

## SecuredLink
Generates an absolute URL from a route name and route parameters.

### Type: `(string routeName, object parameters) => string`

### Example:
```
@{
    var action = Page.Template.SecuredLink("ModdPurchase", new { cart=cart.CartDefinition.CartId, action="Index"} );
}
```

## Cache
Returns cached data when available; otherwise, generates the data.

### Type: `(string cacheKey, int expireSeconds, Func<TResult> cacheGetter) => TResult`
Caches the result for the specified number of seconds.

### Example:
```
@{
    var cachedRandom = Page.Template.Cache("cachekey", 300, () => {
        var rand = new Random();
        return rand.Next();
    });
}
```

### Type: `(string cacheKey, DateTime expireTime, Func<TResult> cacheGetter) => TResult`
Caches the result until the specified time.

### Example:
```
@{
    var next = Page.Template.TruncateNow(300).AddSeconds(300);
    var cachedRandom = Page.Template.Cache("cachekey", next, () => {
        var rand = new Random();
        return rand.Next();
    });
}
```

### Type: `(TCache cacheKey, int expireSeconds, Func<TResult> cacheGetter) => TResult`
Caches the result for the specified number of seconds.

### Example:
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

### Type: `(TCache cacheKey, DateTime expireTime, Func<TResult> cacheGetter) => TResult`
Caches the result until the specified time.

### Example:
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

### Type: `(TCache cacheKey) => TResult`
Returns the cached value, or `default(TResult)` if no cached value exists.

### Example:
```
@{
    var keyword = "keyword";
    var page = 0;
    var data = Page.Template.Cache(new { keyword, page });
}
```

## GetModdUser
Gets user information. Because it contains credentials and other sensitive information, avoid serializing `ModdMembershipUser` directly to JSON or similar formats in production.

### Type: `() => ModdMembershipUser`

### Example:
```
@{
    var user = Page.Template.GetModdUser();
    /* ModdMembershipUser structure
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
Gets product information for the specified internal product ID.

### Type: `(int productId) => Product`

### Example:
```
@{
    var product = Page.Template.GetProduct(1);
    /* Product
    {
        ProductId: int,
        Name: string,
        ExternalId: string, // Equivalent to ExternalId1
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
Gets the available quantity for the specified internal product ID.

### Type: `(int productId) => int`

### Example:
```
@{
    var stock = Page.Template.GetProductAmount(1);
}
```

## GetProductSalesPattern
Gets the sales pattern for the specified internal product ID.

### Type: `(int productId) => SalesPattern`

### Example:
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
Gets the product's points reward rate for the specified internal product ID.

### Type: `(int productId) => int`

### Example:
```
@{
    var rate = Page.Template.GetPointChargeRate(1);
}
```

## CanReserveRequest
Determines whether the specified internal product ID can be reserved.

### Type: `(int productId) => bool`

### Example:
```
@{
    var reservable  = Page.Template.CanReserveRequest(1);
}
```

## GetUnitPriceWithTax
Calculates the tax-included price for the specified internal product ID.

### Type: `(int productId) => decimal`

### Example:
```
@{
    var price = Page.Template.GetUnitPriceWithTax(1);
}
```

## GetDiscountPriceWithTax
Calculates the tax-included discount amount using the internal product ID and discount rate (%).

### Type: `(int productId, int discountRate) => decimal`

### Example:
```
@{
    var discount = Page.Template.GetDiscountPriceWithTax(1, 30);
}
```

## GetDiscountedPriceWithTax
Calculates the tax-included price after discount using the internal product ID and discount rate (%).

### Type: `(int productId, int discountRate) => decimal`

### Example:
```
@{
    var price = Page.Template.GetDiscountPriceWithTax(1, 30); // 30% discount
}
```

## GetMakerPriceWithTax
Calculates the tax-included amount using the internal product ID and the manufacturer's suggested retail price.

### Type: `(int productId, decimal price) => decimal`

### Example:
```
@{
    var price = Page.Template.GetMakerPriceWithTax(1, 1000m);
}
```

## GetProductPaymentMethods
Gets the available payment methods for the specified internal product ID.

### Type: `(int productId) => IEnumerable<PaymentMethod>`

### Example:
```
@{
    var now = Page.Template.GetProductPaymentMethods(1);
}
```

## UnavailableCashOnDeliveryByZipCode
Determines whether cash on delivery is unavailable for the specified postal code.

### Type: `(string zipCode) => bool`

### Example:
```
@{
    var disallowed = Page.Template.UnavailableCashOnDeliveryByZipCode("1030014");
}
```

# UnavailableSetHourByZipCode
Determines whether time-slot selection is unavailable for the specified postal code.

### Type: `(string zipCode) => bool`

### Example:
```
@{
    var disallowed = Page.Template.UnavailableSetHourByZipCode("1030014");
}
```

## UserIsInRole
Determines whether the logged-in user has the specified role.

### Type: `(string roleName) => bool`

### Example:
```
@{
    var hasRole = Page.Template.UserIsInRole("GoldMember");
}
```

## AppendUserToRole
Assigns a role to the logged-in user.

### Type: `(string roleName, string roleParameter) => bool`

### Example:
```
@{
    var result = Page.Template.AppendUserToRole("Campaign1", null);
}
```

## RemoveUserFromRole
Removes a role from the logged-in user.

### Type: `(string roleName) => bool`

### Example:
```
@{
    var result = Page.Template.RemoveUserFromRole("Campaign1");
}
```

## GetRoleParameter
Gets the role parameter value for the logged-in user.

### Type: `(string roleName) => string`

### Example:
```
@{
    var value = Page.Template.GetRoleParameter("Campaign1");
}
```

## GetProductCampaigns
Gets active campaign information associated with the specified internal product ID.

### Type: `(int productId) => IEnumerable<ActiveCampaign>`

### Example:
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

## UserHasBacklog
Determines whether the logged-in user has any in-progress orders.

### Type: `() => bool`

### Example:
```
@{
    var hasBacklog = Page.Template.UserHasBacklog();
}
```

## ZipCodeSearch
Searches for a postal code. Returns `null` if it does not exist.

### Type: `(string zipCode) => IEnumerable<ZipCodeAddress>`

### Example:
```
@{
    var address = Page.Template.ZipCodeSearch("1030014");
}
```

## GetLoginUrl
Gets the login URL specified by the system.

### Type: `() => string`

### Example:
```
@{
    var url = Page.Template.GetLoginUrl();
}
```

## GetPrefecture
Gets a prefecture name from its ID.

### Type: `(int prefId) => string`

### Example:
```
@{
    var tokyo = Page.Template.GetPrefecture(13); // Tokyo
}
```

## RecaptchaRenderInclude
Renders the reCAPTCHA helper script. Specify one or more validation targets as arguments.

### Type: `(string firstTarget, params string[] otherTargets) => HtmlString`

### Example:
Renders the script when `Purchase/Create` is configured as a validation target and is not disabled.
```
@section ScriptBlock {
    @Page.Template.RecaptchaRenderInclude("Purchase/Create")
}
```