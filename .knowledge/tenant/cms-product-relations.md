# CMS商品ページSKU関連データガイド

CMS 上で商品ページに SKU を陳列する際の基礎情報と判断手順をまとめる。

ページ同士を関連付ける用途は [cms-page-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-page-relations.md) を参照する。

## 対象エンティティ

CMS OData は `/cms` 配下を使用する。

- `SitePages`
  - ページ本体。
  - 主キーは `Code`。
  - 主な項目: `Code`, `Kind`, `Name`。
- `SitePageKinds`
  - ページ種別定義。
  - 主な項目: `Code`, `GroupCode`, `Partial`。
- `ProductRelations`
  - 商品ページと商品明細 (`ProductDetail.ExternalId1`) の関連。
  - 主キーは `ExternalId1 + PageCode`。
  - 主な項目: `PageCode`, `ExternalId1`, `DisplayOrder`。

## このドキュメントの対象

`ProductRelations` は商品ページに SKU を陳列するときに使う。

- `PageCode` は陳列先の商品ページを表す。
- `ExternalId1` は陳列する SKU を表す。
- 1つの商品ページに複数 SKU を並べたい場合は、同じ `PageCode` に対して複数レコードを持たせる。

関連先が別ページで表現される場合は `ProductRelations` ではなく `PageRelations` を使う。[cms-page-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-page-relations.md) を参照する。

## まず確認すること

商品ページに SKU を陳列するときは、次の順で確認すると判断しやすい。

1. 対象ページが `SitePages` にどの `Code` と `Kind` で存在するか確認する。
2. `SitePageKinds` で対象 `Kind` の `GroupCode` と `Partial` を確認する。
3. `/meta/Routings` で該当テンプレートの URL パターンを確認し、`SitePages.Code` と実 URL の対応を把握する。
4. 既存の `ProductRelations` を確認し、同系統データの持ち方を揃える。
5. 陳列対象 SKU の `ExternalId1` を確認する。

## `ProductRelations` の見方

`ProductRelations` は商品ページと商品明細を結びつける。

- `PageCode`: 商品ページ
- `ExternalId1`: 商品明細側の識別子
- `DisplayOrder`: 表示順

例:

```json
{
  "PageCode": "/item/w002nb",
  "ExternalId1": "w002nb-blk-m",
  "DisplayOrder": 0
}
```

上記は `/item/w002nb` の商品ページに SKU `w002nb-blk-m` を陳列する関係を表す。

## `SitePages.Code` とルーティングの見方

商品ページの陳列先は、見た目の URL ではなく `SitePages.Code` を基準に扱う。

例えば `TemplateName = 'Page'` のルーティングに `item/{Code}` があれば、商品ページは `/item/...` の形式で `SitePages.Code` に登録される。

`ProductRelations.PageCode` にはこの `SitePages.Code` を使用する。

## 投入前の注意点

- 既存データと同じ並び方を優先し、`DisplayOrder` の付け方を揃える。
- 同じ `ExternalId1 + PageCode` を再投入すると重複になるため、事前に既存レコードを確認する。
- 新規投入前に、対象のページコードが `SitePages` に存在することを確認する。
- 新規投入前に、陳列対象 SKU の `ExternalId1` が正しいことを確認する。
- 参照先が SKU ではなく別ページなら `ProductRelations` ではなく `PageRelations` を使う。

## 確認コマンド例

`node sync.ts rest ...` を使うと npm の起動メッセージが混ざらず扱いやすい。

```powershell
node .\sync.ts rest get "/meta/Routings?`$filter=TemplateName eq 'Page'&`$select=Id,Name,Pattern,TemplateName"
node .\sync.ts rest get "/cms/SitePageKinds?`$select=Code,Name,GroupCode,Partial&`$orderby=Code"
node .\sync.ts rest get "/cms/SitePages?`$select=Code,Kind,Name&`$orderby=Kind,Code"
node .\sync.ts rest get "/cms/ProductRelations?`$select=PageCode,ExternalId1,DisplayOrder&`$orderby=PageCode,ExternalId1"
```

必要に応じて `$filter=startswith(PageCode,'/item/')` や `$filter=PageCode eq '/item/xxx'` のように絞り込む。

## 調査の進め方

新しい商品ページ SKU 陳列データを扱うときは、以下の進め方を基本とする。

1. 対象ページの `SitePages.Code` を特定する。
2. `SitePages` と `SitePageKinds` を確認し、ページ種別と Partial を特定する。
3. 既存の `ProductRelations` から同種の登録例を探す。
4. 使用する `ExternalId1` と `DisplayOrder` を決める。
5. 重複確認後に `POST` または `PATCH` を行う。

この流れにしておくと、商品ページごとの SKU 陳列ルールを既存データに合わせて判断しやすい。