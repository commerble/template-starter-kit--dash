# CMSページ関連データガイド

CMS 上でページ同士を関連付ける際の基礎情報と判断手順をまとめる。

`ProductRelations` を使うケース、つまり商品ページに SKU を陳列する用途は [cms-product-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-product-relations.md) を参照する。

## 対象エンティティ

CMS OData は `/cms` 配下を使用する。

- `SitePages`
  - ページ本体。
  - 主キーは `Code`。
  - 主な項目: `Code`, `Kind`, `Name`。
- `SitePageKinds`
  - ページ種別定義。
  - 主な項目: `Code`, `GroupCode`, `Partial`。
- `PageRelations`
  - ページとページの関連。
  - 主キーは `GroupCode + PageCode + RelateCode`。
  - 主な項目: `GroupCode`, `PageCode`, `RelateCode`, `DisplayOrder`。

## まず確認すること

ページ関連データを扱うときは、次の順で確認すると判断しやすい。

1. 対象ページが `SitePages` にどの `Code` と `Kind` で存在するか確認する。
2. `SitePageKinds` で対象 `Kind` の `GroupCode` と `Partial` を確認する。
3. `/meta/Routings` で該当テンプレートの URL パターンを確認し、`SitePages.Code` と実 URL の対応を把握する。
4. 既存の `PageRelations` を確認し、同系統データの持ち方を揃える。

## このドキュメントの対象

`PageRelations` はページ同士を関連付けるときに使う。

- 商品ページと商品ページを関連付けるときは、関連商品として扱われる。
- LP ページ、タグページ、カテゴリページなどに商品ページを関連付けるときは、そのページに商品ページを陳列しているとみなされる。
- 関連先が `SitePages.Code` で表現される場合は `PageRelations` を使う。

関連先が商品明細コードや外部 ID の場合は `PageRelations` ではなく `ProductRelations` を使う。[cms-product-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-product-relations.md) を参照する。

## `SitePages.Code` とルーティングの見方

ページ関連では、見た目の URL ではなく `SitePages.Code` を基準に扱う。

例えば `TemplateName = 'Page'` のルーティングに以下のような定義があれば、対応する `SitePages.Code` は `/item/...` や `/tag/...` の形式になる。

- `item/{Code}`
- `tag/{*Code}`

このため、商品ページとタグページ、カテゴリページと商品ページのような関連は、URL 文字列ではなく `SitePages.Code` 同士の関連として `PageRelations` に登録する。

## `PageRelations` の見方

`PageRelations` はページから別ページへの参照を表す。

- `PageCode`: 元ページ
- `RelateCode`: 関連先ページ
- `GroupCode`: 関連グループ。既存データに合わせる
- `DisplayOrder`: 表示順

例:

```json
{
  "GroupCode": "default",
  "PageCode": "/tag/new",
  "RelateCode": "/item/w002nb",
  "DisplayOrder": 0
}
```

上記は `/tag/new` から `/item/w002nb` へのページ関連を表す。

## 投入前の注意点

- 既存データと同じ関連の持ち方を優先する。特に `GroupCode` は既存レコードを見て合わせる。
- `PageRelations` は主キーに `RelateCode` を含むため、1つの `PageCode` に対して複数の関連先を登録できる。
- 同じ主キー組み合わせを再投入すると重複になるため、事前に既存レコードを確認する。
- 新規投入前に、対象のページコードが `SitePages` に存在することを確認する。
- ルーティング変更が絡む場合は、別途 `/meta/Routings` 側の設定と再起動要否も確認する。

## 確認コマンド例

`node sync.ts rest ...` を使うと npm の起動メッセージが混ざらず扱いやすい。

```powershell
node .\sync.ts rest get "/meta/Routings?`$filter=TemplateName eq 'Page'&`$select=Id,Name,Pattern,TemplateName"
node .\sync.ts rest get "/cms/SitePageKinds?`$select=Code,Name,GroupCode,Partial&`$orderby=Code"
node .\sync.ts rest get "/cms/SitePages?`$select=Code,Kind,Name&`$orderby=Kind,Code"
node .\sync.ts rest get "/cms/PageRelations?`$select=GroupCode,PageCode,RelateCode,DisplayOrder&`$orderby=PageCode,RelateCode"
```

必要に応じて `$filter=startswith(PageCode,'/tag/')`や `$filter=SitePageKind/GroupCode eq 'product'` のように絞り込む。
取得する際に目録のみが必要なのであれば、`$select=<keys>`を積極的に使用する。(※ プロパティ名がBodyやHtmlになっている場合は、長い文字列データが入っている可能性があり、データ転送量が多くなるため避ける)

## 調査の進め方

新しいページ関連データを扱うときは、以下の進め方を基本とする。

1. 対象 URL から想定される `SitePages.Code` を洗い出す。
2. `SitePages` と `SitePageKinds` を確認し、ページ種別と Partial を特定する。
3. 既存の `PageRelations` から同種の登録例を探す。
4. 同じ構造になるように投入データを決める。
5. 重複確認後に `POST` または `PATCH` を行う。

この流れにしておくと、タグページ以外のカテゴリ、特集、関連商品などでも同じ考え方で判断できる。