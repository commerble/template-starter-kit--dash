# Routings
## Built-in Routing
Cart templates have built-in controllers with predefined routes.

|                  Route                  |         Cart Template           |
| :-------------------------------------- | ------------------------------- |
| GET ~/order/cart                        | ModdOrderCart                   |
| GET ~/order/cartitems                   | ModdOrderCartItems              |
| GET ~/order/history                     | ModdOrderHistoryList            |
| GET ~/order/history/{orderId}           | ModdOrderHistory                |
| POST ~/order/history/{orderId}          | ModdOrderHistoryCustomer        |
| POST ~/order/history/{orderId}          | ModdOrderHistoryDelivery        |
| POST ~/order/history/{orderId}          | ModdOrderHistoryPayment         |
| GET ~/order/historyshipping/{orderId}   | ModdOrderHistoryShipping        |
| POST ~/order/historyshipping/{orderId}  | ModdOrderHistoryZipSearch       |
| GET ~/order/historycancel/{orderId}     | ModdOrderHistoryCancel          |
| GET ~/order/archives                    | ModdOrderArchivesList           |
| GET ~/order/archives/{orderId}          | ModdOrderArchives               |
| GET ~/purchase/{cartId}                 | ModdPurchaseError               |
| GET ~/purhcase/{cartId}/shipping        | ModdPurchaseShipping            |
| GET ~/purhcase/{cartId}/payment         | ModdPurchasePayment             |
| GET ~/purhcase/{cartId}/confirm         | ModdPurchaseConfirm             |
| GET ~/purchase/{cartId}/external        | ModdPurchaseExternal            |
| GET ~/purchase/{cartId}/complete        | ModdPurchaseComplete            |
| GET ~/member/index                      | ModdMemberIndex                 |
| GET ~/member/account                    | ModdMemberAccount               |
| POST ~/member/account                   | ModdMemberAccountConfirm        |
| POST ~/member/accountaddress            | ModdMemberAccountAddressConfirm |
| GET ~/member/addresses                  | ModdMemberAddressList           |
| GET ~/member/addresses/{addressId}      | ModdMemberAddress               |
| GET ~/member/favorites                  | ModdMemberFavoriteList          |
| GET ~/member/favorites/{productId}      | ModdMemberFavorite              |
| GET ~/member/createfavorite             | ModdMemberFavoriteAppend        |
| GET ~/member/notices                    | ModdMemberNoticeList            |
| GET ~/member/notices/{reserveRequestId} | ModdMemberNotice                |
| GET ~/member/createnotice               | ModdMemberNoticeAppend          |
| GET ~/member/password                   | ModdMemberPassword              |
| GET ~/member/payments                   | ModdMemberPayments              |
| GET ~/member/point                      | ModdMemberPoint                 |
| GET ~/member/quit                       | ModdMemberQuit                  |
| POST ~/member/username                  | ModdMemberUserNameConfirm       |
| POST ~/member/zipsearch                 | ModdMemberZipSearch             |
| GET ~/site/account                      | ModdSiteAccount                 |
| POST ~/site/account                     | ModdSiteAccountConfirm          |
| GET ~/site/accountcomplete              | ModdSiteAccountComplete         |
| GET ~/site/activate/{token}             | ModdSiteActivate                |
| GET ~/site/activate                     | ModdSiteActivateRequest         |
| GET ~/site/login                        | ModdSiteLogin                   |
| GET ~/site/loginstate                   | ModdSiteLoginState              |
| GET ~/site/recovery                     | ModdSiteRecovery                |
| GET ~/site/recovery/{token}             | ModdSiteRecoveryUpdate          |
| POST ~/site/recovery/{token}            | ModdSiteRecoveryComplete        |
| GET ~/site/externallogin                | ModdSiteExternalLogin           |
| GET ~/site/guestorder                   | ModdSiteGuestOrder              |
| GET ~/site/inquiry                      | ModdSiteInquiry                 |
| POST ~/site/inquiry/{model}             | ModdSiteInquiryConfirm          |
| GET ~/state/cart                        | ModdStateCart                   |
| GET ~/state/cartitems                   | ModdStateCartItems              |
| GET ~/state/logins                      | ModdStateLogin                  |
| GET ~/errors/400                        | ModdErrorsError400              |
| GET ~/errors/403                        | ModdErrorsError403              |
| GET ~/errors/404                        | ModdErrorsError404              |
| GET ~/errors/406                        | ModdErrorsError406              |
| GET ~/errors/409                        | ModdErrorsError409              |
| GET ~/errors/451                        | ModdErrorsError451              |
| GET ~/errors/500                        | ModdErrorsError500              |

Note that the template used may vary depending on the session and POST data.


## Custom Routing
Site templates are not rendered when created because they have no routing rules.
They must be associated with routing rules to be viewed on the website.

Routes can be managed from the CMS administration screen or through the Management Web API.

|      REST API Path       |                                                     Description                                              |
| :----------------------- | ------------------------------------------------------------------------------------------------------------ |
| /meta/Routings           | Routing table                                                                                                |
| /meta/RoutingsParameters | Routing parameters. Determines whether template parameters come from route parameters or query parameters.   |
| /meta/Types              | Parameter types                                                                                              |

The structure of each item is defined in `./$metadata--meta.xml` and can be operated through OData.

>[!CAUTION]
The `LoadOrder` property is reserved. Route priority is determined by `Id`, which corresponds to registration order.

> [!Important]
> Changes to the routing table do not take effect until the system is restarted.
> Restarting is only possible from the CMS administration screen, so the AI agent must ask the user to perform it.

Example: Find the route for the `Search` template.

```
$ node ./sync.ts rest get "/meta/Routings?\$expand=RoutingParameters($expand=Type)&\$filter=TemplateName eq 'Search'"
200
Content-Type: application/json; odata
{"@odata.context":"...","value":[{"Id":10,"Name":"Search","Pattern":"search","RouteType":1,"ContentType":"text/html","TemplateName":"Search","BlobExpression":null,"BlobQuery":null,"LoadOrder":null,"RoutingParameters":[]}]}
```

> [!Note]
> The `Pattern` property defines the route's URL pattern.
> A leading `/` cannot be specified in `Pattern`. To specify the site root, use an empty string.

## RoutingParameters
Patterns can contain routing parameters.
The following is an Item route with the pattern `item/{Code}`. `Code` is the routing parameter, and its details are registered in the `RoutingParameters` navigation property.

```
{"@odata.context":"...","Id":4,"Name":"Item","Pattern":"item/{Code}","RouteType":1,"ContentType":"text/html","TemplateName":"Page","BlobExpression":null,"BlobQuery":null,"LoadOrder":null,"RoutingParameters":[{"Id":4,"Name":"Code","ParameterType":1,"TypeId":7,"Value":null,"HasValue":false,"Type":{"Id":7,"Name":"\u30b7\u30e7\u30fc\u30c8\u30c6\u30ad\u30b9\u30c8","DbTypeName":"nvarchar(32)","DbDefaultValue":null,"ClrTypeName":"System.String","UrlConstraint":"","InputValidation":"(.+){1,32}","DefaultFieldTypeName":""}}]}
```

`RoutingParameters` supports the following `ParameterType` values.

| ParamterType |   Description    |
| :----------- | ---------------- |
| 0            | Query parameter  |
| 1            | Route parameter  |
| 2            | Header           |

Query and route parameters configured in `RoutingParameters` can be accessed in the template through `ViewBag.{parameterName}` when a template parameter with the same name is registered for the corresponding template.
