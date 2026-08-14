# Enum Definitions
List of enum values used in EC data.

## HumanSexes

|  値  |     名称      |   和名   | Description |
| ---: | ------------- | -------- | ----------- |
|    0 | NotKnown      | 不明     |             |
|    1 | Male          | 男性     |             |
|    2 | Female        | 女性     |             |
|    9 | NotApplicable | 適用不能 |             |

Target columns  
./$metadata--ec.xml#ordercustomers

## OrderLineType

|  値  |       名称       |    和名    | Description |
| ---: | ---------------- | ---------- | ----------- |
|    0 | NormalOrder      | 通常       |             |
|    1 | Canceled         | キャンセル |             |
|    2 | Returned         | 返品       |             |
|    3 | Benefit          | 特典       |             |
|    4 | SetProductParent | セット親   |             |
|    5 | SetProductChild  | セット子   |             |
|    6 | Unavailable      | 無効       |             |
|    7 | Additional       | 追加商品   |             |

Target columns  
./$metadata--ec.xml#orderlines, 
./$metadata--ec.xml#returnorderlines

## OrderType

|  値  |  名称   |    和名    | Description |
| ---: | ------- | ---------- | ----------- |
|    0 | Normal  | 旧譜       |             |
|    1 | Reserve | 新譜       |             |
|    2 | Pending | 取り置き   |             |
|    3 | Bto     | 受注生産品 |             |
|    4 | ReSend  | 返品再送   |             |

Target columns  
./$metadata--ec.xml#purchaseorders, 
./$metadata--ec.xml#returnorders

## OrderStatus

|  値  |       名称       |     和名     | Description |
| ---: | ---------------- | ------------ | ----------- |
|    0 | Accept           | 受注         |             |
|    1 | UnAllocate       | 未引当       |             |
|    2 | PartAllocate     | 中途引当     |             |
|    3 | Allocated        | 引当済       |             |
|    6 | ShipIndicate     | 出荷指示済   |             |
|    7 | Ship             | 出荷済       |             |
|    8 | Arrival          | 着荷済       |             |
|    9 | Booked           | 計上済       |             |
|   10 | Cancel           | キャンセル   |             |
|   11 | ShipSuspend      | 出荷保留     |             |
|   12 | WorkerProcessing | バッチ処理中 |             |

Target columns  
./$metadata--ec.xml#purchaseorders, 
./$metadata--ec.xml#returnorders

## PaymentMethod

|  値  |      名称      |       和名       |                                         Description                                         |
| ---: | -------------- | ---------------- | ------------------------------------------------------------------------------------------- |
|    0 | CashOnDelivery | 代引き           |                                                                                             |
|    1 | CreditCard     | クレジットカード |                                                                                             |
|    2 | PointOnly      | 全額ポイント     |                                                                                             |
|    3 | Cvs            | コンビニ決済     |                                                                                             |
|    4 | Offsite        | オフサイト       | Payment methods such as bank transfers that are not processed within the Commerble pipeline |
|    5 | Offline        | オフライン       | Payments made outside the online system, such as in-store payments                          |
|    6 | Token          | トークン         | Token-based payment regardless of the payment method                                        |
|  100 | External       | 外部             |                                                                                             |
|   -1 | None           | None             |                                                                                             |

Target columns  
./$metadata--ec.xml#purchaseorders, 
./$metadata--ec.xml#returnorders

## DeliveryMethod

|  値  |    名称     |   和名   |               Description                |
| ---: | ----------- | -------- | ---------------------------------------- |
|    0 | None        |          | Reserved for the serializer; do not use. |
|    1 | Default     | 通常配送 |                                          |
|  100 | Mail        | メール便 |                                          |
|  200 | Periodical  | 定期便   |                                          |
|  201 | Periodical1 | 定期便1  | 通常は200(Priodical)にフォールバック     |
|  202 | Periodical2 | 定期便2  | 通常は200(Priodical)にフォールバック     |
|  203 | Periodical3 | 定期便3  | 通常は200(Priodical)にフォールバック     |
|  204 | Periodical4 | 定期便4  | 通常は200(Priodical)にフォールバック     |
|  205 | Periodical5 | 定期便5  | 通常は200(Priodical)にフォールバック     |
|  300 | Direct      | 産直     |                                          |
|  301 | Direct1     | 産直1    | 通常は300(Direct)にフォールバック        |
|  302 | Direct2     | 産直2    | 通常は300(Direct)にフォールバック        |
|  303 | Direct3     | 産直3    | 通常は300(Direct)にフォールバック        |
|  304 | Direct4     | 産直4    | 通常は300(Direct)にフォールバック        |
|  305 | Direct5     | 産直5    | 通常は300(Direct)にフォールバック        |

Target columns  

## PaymentStatus

|  値  |    名称    |    和名    | Description |
| ---: | ---------- | ---------- | ----------- |
|    0 | Ready      | 未決済     |             |
|    1 | Success    | 決済成功   |             |
|    2 | Fail       | 決済失敗   |             |
|    3 | Processing | 処理中     |             |
|    4 | Cancel     | キャンセル |             |

Target columns  
./$metadata--ec.xml#purchaseorders,
./$metadata--ec.xml#returnorders

## ProductType

|  値  |  名称   |     和名     | Description |
| ---: | ------- | ------------ | ----------- |
|    0 | Normal  | 単品         |             |
|    1 | Set     | セット       |             |
|    3 | Benefit | 副資材その他 |             |

Target columns  
./$metadata--ec.xml#products

## SalesStatus

|  値  | 名称 |   和名   | Description |
| ---: | ---- | -------- | ----------- |
|    0 | Sale | 通常     |             |
|    1 | Stop | 販売中止 |             |
|    2 | End  | 販売終了 |             |

Target columns  
./$metadata--ec.xml#products

## StockOperation

|  値  | 名称 |        和名        | Description |
| ---: | ---- | ------------------ | ----------- |
|    0 |      | 販売可能数戻し     |             |
|    1 |      | 出荷利用可能数戻し |             |
|    2 |      | 不良在庫戻し       |             |

Target columns  
./$metadata--ec.xml#returnreasons

## TaxRoundMode

|  値  |     名称      |    和名     |                        Description                         |
| ---: | ------------- | ----------- | ---------------------------------------------------------- |
|    0 | Round         | 四捨五入    | The tax rate is determined by ./$metadata--ec.xml#taxrates |
|    1 | Floor         | 切り捨て    | The tax rate is determined by ./$metadata--ec.xml#taxrates |
|    2 | Ceil          | 切り上げ    | The tax rate is determined by ./$metadata--ec.xml#taxrates |
|    3 | NoTaxCharge   | 非課税      |                                                            |
|    4 | UseTaxPrice   | 税額指定    | The tax rate is determined by ./$metadata--ec.xml#taxrates |
|    5 | NoRound       | 丸めなし    | The tax rate is determined by ./$metadata--ec.xml#taxrates |
|    6 | Round8        | 8%四捨五入  | The tax rate is forced to 8%                               |
|    7 | Floor8        | 8%切り捨て  | The tax rate is forced to 8%                               |
|    8 | Ceil8         | 8%切り上げ  | The tax rate is forced to 8%                               |
|    9 | NoRound8      | 8%丸めなし  | The tax rate is forced to 8%                               |
|   10 | Round10       | 10%四捨五入 | The tax rate is forced to 10%                              |
|   11 | Floor10       | 10%切り捨て | The tax rate is forced to 10%                              |
|   12 | Ceil10        | 10%切り上げ | The tax rate is forced to 10%                              |
|   13 | NoRound10     | 10%丸めなし | The tax rate is forced to 10%                              |
|   14 | UseTaxPrice8  | 8%税額指定  | The tax rate is forced to 8%                               |
|   15 | UseTaxPrice10 | 10%税額指定 | The tax rate is forced to 10%                              |


Target columns  
./$metadata--ec.xml#salesproducts

## PointType

|  値  |      名称      |      和名      | Description |
| ---: | -------------- | -------------- | ----------- |
|    0 | Withdraw       | 使用           |             |
|    1 | WithdrawCancel | 使用キャンセル |             |
|    2 | Deposit        | 付与           |             |
|    3 | DepositCancel  | 付与キャンセル |             |
|    4 | Adjust         | 調整           |             |
|    5 | Lapsed         | 失効           |             |

Target columns  
./$metadata--ec.xml#pointbanktransactions,
./$metadata--ec.xml#pointbankallocates

## MemberStatus

|  値  |   名称    | 和名 | Description |
| ---: | --------- | ---- | ----------- |
|    0 | Default   | 通常 |             |
|    1 | Attention | 注意 |             |
|    2 | Warning   | 警告 |             |

Target columns  
./$metadata--ec.xml#ordercustomers

## TemperatureZone

|  値  |  名称  |  和名  | Description |
| ---: | ------ | ------ | ----------- |
|    1 | Normal | 常温   |             |
|    2 | Cool   | 冷蔵   |             |
|    3 | Freeze | 冷凍   |             |
|    4 | Ice    | アイス |             |

Target columns  
./$metadata--ec.xml#deliverypatterns,
./$metadata--ec.xml#temperaturezone

## ReserveRequestStatus

|  値  |   名称    |    和名    |                                          Description                                          |
| ---: | --------- | ---------- | --------------------------------------------------------------------------------------------- |
|    0 | Accept    | 入荷待ち   | By default, this automatically changes to "Allocated" when the available quantity is updated. |
|    1 | Allocated | 引当済み   |                                                                                               |
|    2 | Purchased | 購入済み   |                                                                                               |
|    3 | Cancel    | キャンセル |                                                                                               |

Target columns  
./$metadata--ec.xml#reserverequests,
./$metadata--ec.xml#reserverequeststatuscounts

## MailType

|  値  |      名称       |         和名         | Description |
| ---: | --------------- | -------------------- | ----------- |
|    0 | CustomerOrder   | 利用者向け注文関連   |             |
|    1 | CustomerRequest | 利用者向け仮予約関連 |             |
|    2 | CustomerInfo    | 利用者向け           |             |
|   10 | SystemAlert     | システム通知         |             |

Target columns  

./$metadata--ec.xml#mailrequests,
./$metadata--ec.xml#mailhistory