# CMS Page Relations Guide

This guide summarizes the basic information and decision process for relating pages in CMS.

For cases using `ProductRelations`, such as displaying SKUs on product pages, see [cms-product-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-product-relations.md).

## Target Entities

CMS OData uses the `/cms` path.

- `SitePages`
  - Page data.
  - The primary key is `Code`.
  - Main fields: `Code`, `Kind`, `Name`.
- `SitePageKinds`
  - Page type definitions.
  - Main fields: `Code`, `GroupCode`, `Partial`.
- `PageRelations`
  - Relations between pages.
  - The primary key is `GroupCode + PageCode + RelateCode`.
  - Main fields: `GroupCode`, `PageCode`, `RelateCode`, `DisplayOrder`.

## Initial Checks

When handling page relation data, check the following in order:

1. Check which `Code` and `Kind` identify the target page in `SitePages`.
2. In `SitePageKinds`, check the `GroupCode` and `Partial` for the target `Kind`.
3. Check the URL pattern for the relevant template in `/meta/Routings` and understand the mapping between `SitePages.Code` and the actual URL.
4. Check existing `PageRelations` and follow the same data structure for related data.

## Scope of This Guide

Use `PageRelations` to relate pages to one another.

- Relating a product page to another product page treats it as a related product.
- Relating product pages to LP, tag, or category pages is treated as displaying those product pages on the respective page.
- Use `PageRelations` when the related page is represented by `SitePages.Code`.

When the related item is a product detail code or external ID, use `ProductRelations` instead of `PageRelations`. See [cms-product-relations.md](d:\templates\template-starter-kit--dash\.knowledge\cms-product-relations.md).

## Understanding `SitePages.Code` and Routing

For page relations, use `SitePages.Code` as the basis rather than the visible URL.

For example, if the routing for `TemplateName = 'Page'` contains definitions such as the following, the corresponding `SitePages.Code` values use the `/item/...` or `/tag/...` format.

- `item/{Code}`
- `tag/{*Code}`

Therefore, relations such as product-to-tag or category-to-product relations should be registered in `PageRelations` as relations between `SitePages.Code` values, not URL strings.

## Understanding `PageRelations`

`PageRelations` represents a reference from one page to another.

- `PageCode`: Source page.
- `RelateCode`: Related page.
- `GroupCode`: Relation group. Match existing data.
- `DisplayOrder`: Display order.

Example:

```json
{
  "GroupCode": "default",
  "PageCode": "/tag/new",
  "RelateCode": "/item/w002nb",
  "DisplayOrder": 0
}
```

The example above represents a page relation from `/tag/new` to `/item/w002nb`.

## Checks Before Insertion

- Prefer the same relation structure as existing data. In particular, match `GroupCode` to existing records.
- Because `PageRelations` includes `RelateCode` in its primary key, multiple related pages can be registered for one `PageCode`.
- Check existing records first, because inserting the same primary-key combination again creates a duplicate.
- Before inserting new data, confirm that the target page code exists in `SitePages`.
- If routing changes are involved, also check the `/meta/Routings` settings and whether a restart is required.

## Example Inspection Commands

Using `node sync.ts rest ...` avoids npm startup messages and makes the output easier to process.

```pwsh
node .\sync.ts rest get "/meta/Routings?`$filter=TemplateName eq 'Page'&`$select=Id,Name,Pattern,TemplateName"
node .\sync.ts rest get "/cms/SitePageKinds?`$select=Code,Name,GroupCode,Partial&`$orderby=Code"
node .\sync.ts rest get "/cms/SitePages?`$select=Code,Kind,Name&`$orderby=Kind,Code"
node .\sync.ts rest get "/cms/PageRelations?`$select=GroupCode,PageCode,RelateCode,DisplayOrder&`$orderby=PageCode,RelateCode"
```

Filter as needed, for example with `$filter=startswith(PageCode,'/tag/')` or `$filter=SitePageKind/GroupCode eq 'product'`.
When only an index is needed, use `$select=<keys>` whenever possible. (Avoid properties named `Body` or `Html`, which may contain long string data and increase data transfer.)

## Investigation Workflow

Use the following workflow when handling new page relation data:

1. Identify the expected `SitePages.Code` values from the target URLs.
2. Check `SitePages` and `SitePageKinds` to identify the page type and `Partial`.
3. Find similar registration examples in existing `PageRelations`.
4. Define the insertion data using the same structure.
5. Check for duplicates, then use `POST` or `PATCH`.

This workflow also applies to categories, features, related products, and other page types beyond tag pages.