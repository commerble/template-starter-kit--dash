# Routings
## 組み込みルーティング
カートテンプレートには組み込みのコントローラーがあり、事前に定義された組み込みのルーティングがある。

|              ルーティング               |       カートテンプレート        |
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

※ 但し、セッション内容やPOST内容で使用されるテンプレートは変わる。


## カスタムルーティング
サイトテンプレートは作成時点ではルーティングルールがないためレンダリングされない。
Webサイトで確認するためにはルーティングルールで紐づける必要がある。

ルーティングはCMS管理画面から管理できるが、管理WEBAPIを使用しても同様に操作できる。

|      REST API パス       |                                                     説明                                                     |
| :----------------------- | ------------------------------------------------------------------------------------------------------------ |
| /meta/Routings           | ルーティングテーブル                                                                                         |
| /meta/RoutingsParameters | ルーティングパラメータ。テンプレートパラメータがルートパラメータ由来なのかクエリパラメータ由来かを決定する。 |
| /meta/Types              | パラメータの型                                                                                               |

各項目の構造は./$metadata--meta.xmlで定義されODataとして操作できる。

>[!CAUTION]
RoutingのLoadOrderプロパティは予約項目であり、ルーティングの優先順位はId、つまり登録順となる。

> [!Important]
> ルーティングテーブルの変更は再起動をするまで適用されません。
> 再起動はCMS管理画面からのみ行えるため、AIエージェントはユーザに依頼する必要があります。

例: "Search"テンプレートのルーティングを探す

```
$ node ./sync.ts rest get "/meta/Routings?\$expand=RoutingParameters($expand=Type)&\$filter=TemplateName eq 'Search'"
200
Content-Type: application/json; odata
{"@odata.context":"...","value":[{"Id":10,"Name":"Search","Pattern":"search","RouteType":1,"ContentType":"text/html","TemplateName":"Search","BlobExpression":null,"BlobQuery":null,"LoadOrder":null,"RoutingParameters":[]}]}
```

> [!Note]
> PatternプロパティがルーティングのURLパターンとなります。
> Patternの先頭には`/`を指定できません。つまり、サイトトップを指定する場合は空文字を指定します。

## RoutingParameters
パターンにはルーティングパラメータを記述できます。
次に示すのはItemルーティングです。このルーティングのパターンは`item/{Code}`となっています。`Code`がルーティングパラメータになり、RoutingParametersナビゲーションにその詳細が登録されます。

```
{"@odata.context":"...","Id":4,"Name":"Item","Pattern":"item/{Code}","RouteType":1,"ContentType":"text/html","TemplateName":"Page","BlobExpression":null,"BlobQuery":null,"LoadOrder":null,"RoutingParameters":[{"Id":4,"Name":"Code","ParameterType":1,"TypeId":7,"Value":null,"HasValue":false,"Type":{"Id":7,"Name":"\u30b7\u30e7\u30fc\u30c8\u30c6\u30ad\u30b9\u30c8","DbTypeName":"nvarchar(32)","DbDefaultValue":null,"ClrTypeName":"System.String","UrlConstraint":"","InputValidation":"(.+){1,32}","DefaultFieldTypeName":""}}]}
```

RoutingParametersにはParameterTypeで指定される以下の種類があります。

| ParamterType |       説明       |
| :----------- | ---------------- |
| 0            | クエリパラメータ |
| 1            | ルートパラメータ |
| 2            | ヘッダー         |

RoutingParametersに設定されたクエリパラメータとルートパラメータには同名のテンプレートパラメータが該当テンプレートに登録されている場合にテンプレート内で`ViewBag.{パラメータ名}`にてアクセスできます。
