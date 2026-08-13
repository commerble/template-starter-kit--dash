# CMS Product Page SKU Relations Guide

This guide summarizes the basic information and decision process for displaying SKUs on product pages in CMS.

For relating pages to one another, see [cms-page-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-page-relations.md).

## Target Entities

CMS OData uses the `/cms` path.

- `SitePages`
  - Page data.
  - The primary key is `Code`.
  - Main fields: `Code`, `Kind`, `Name`.
- `SitePageKinds`
  - Page type definitions.
  - Main fields: `Code`, `GroupCode`, `Partial`.
- `ProductRelations`
  - Relations between product pages and product details (`ProductDetail.ExternalId1`).
  - The primary key is `ExternalId1 + PageCode`.
  - Main fields: `PageCode`, `ExternalId1`, `DisplayOrder`.

## Scope of This Guide

Use `ProductRelations` to display SKUs on product pages.

- `PageCode` identifies the product page where the SKU is displayed.
- `ExternalId1` identifies the SKU to display.
- To display multiple SKUs on one product page, create multiple records with the same `PageCode`.

When the related item is represented by another page, use `PageRelations` instead of `ProductRelations`. See [cms-page-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-page-relations.md).

## Initial Checks

When displaying SKUs on a product page, check the following in order:

1. Check which `Code` and `Kind` identify the target page in `SitePages`.
2. In `SitePageKinds`, check the `GroupCode` and `Partial` for the target `Kind`.
3. Check the URL pattern for the relevant template in `/meta/Routings` and understand the mapping between `SitePages.Code` and the actual URL.
4. Check existing `ProductRelations` and follow the same data structure for related data.
5. Check the `ExternalId1` of the SKU to display.

## Understanding `ProductRelations`

`ProductRelations` links a product page to a product detail.

- `PageCode`: Product page.
- `ExternalId1`: Product detail identifier.
- `DisplayOrder`: Display order.

Example:

```json
{
  "PageCode": "/item/w002nb",
  "ExternalId1": "w002nb-blk-m",
  "DisplayOrder": 0
}
```

The example above represents displaying SKU `w002nb-blk-m` on the `/item/w002nb` product page.

## Understanding `SitePages.Code` and Routing

For product page display targets, use `SitePages.Code` as the basis rather than the visible URL.

For example, if the routing for `TemplateName = 'Page'` contains `item/{Code}`, product pages are registered in `SitePages.Code` using the `/item/...` format.

Use this `SitePages.Code` value for `ProductRelations.PageCode`.

## Checks Before Insertion

- Prefer the same ordering as existing data and follow the existing `DisplayOrder` convention.
- Check existing records first, because inserting the same `ExternalId1 + PageCode` again creates a duplicate.
- Before inserting new data, confirm that the target page code exists in `SitePages`.
- Before inserting new data, confirm that the `ExternalId1` of the SKU to display is correct.
- If the target is another page rather than a SKU, use `PageRelations` instead of `ProductRelations`.

## Example Inspection Commands

Using `node sync.ts rest ...` avoids npm startup messages and makes the output easier to process.

```powershell
node .\sync.ts rest get "/meta/Routings?`$filter=TemplateName eq 'Page'&`$select=Id,Name,Pattern,TemplateName"
node .\sync.ts rest get "/cms/SitePageKinds?`$select=Code,Name,GroupCode,Partial&`$orderby=Code"
node .\sync.ts rest get "/cms/SitePages?`$select=Code,Kind,Name&`$orderby=Kind,Code"
node .\sync.ts rest get "/cms/ProductRelations?`$select=PageCode,ExternalId1,DisplayOrder&`$orderby=PageCode,ExternalId1"
```

### Counting Product Pages

When counting product pages, filter `SitePages` through the `SitePageKind` navigation property in one request. Do not fetch `SitePageKinds` first just to obtain the kind codes. If only the count is needed, use the `/$count` endpoint so the API returns a plain number without a page collection.

```powershell
node .\sync.ts rest get "/cms/SitePages/`$count?`$filter=SitePageKind/GroupCode%20eq%20%27product%27"
```

`SitePageKind/GroupCode eq 'product'` includes all page kinds in the product group, such as `product` and `productc`. The `/$count` response is `text/plain` and contains only the product page count. Use `$count=true&$top=0` instead when an OData JSON response with `@odata.count` is required.

Filter as needed, for example with `$filter=startswith(PageCode,'/item/')` or `$filter=PageCode eq '/item/xxx'`.

## Investigation Workflow

Use the following workflow when handling new product page SKU display data:

1. Identify the target page's `SitePages.Code`.
2. Check `SitePages` and `SitePageKinds` to identify the page type and `Partial`.
3. Find similar registration examples in existing `ProductRelations`.
4. Decide which `ExternalId1` and `DisplayOrder` to use.
5. Check for duplicates, then use `POST` or `PATCH`.

This workflow makes it easier to align SKU display rules for each product page with existing data.