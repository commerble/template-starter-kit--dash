# Front Templates
Front templates use the `.cshtml` extension and Razor syntax. See [razor.md](./razor.md) for details about Razor.

Front templates are broadly divided into site templates and cart templates.

* Site templates: Can be created freely and assigned routes through Commerble CMS.
* Cart templates: Have fixed names and view models and are used by the built-in controllers of Commerble EC PaaS.

## Template Names
Template files are organized in folders in this repository, but are registered in Commerble with a flat name formed by joining the folder names below the `templates` folder when synchronized.

Examples:
* templates/Modd/Shared/Functions.cshtml -> ModdSharedFunctions
* templates/Layout/Default.cshtml -> LayoutDefault

Template file names must match `[a-zA-Z][a-zA-Z0-9_]*`. Therefore, do not follow the ASP.NET convention of prefixing partial view file names with `_`.

## Helpers
Front templates render website HTML and can use several helpers provided by Commerble.

## Page Object
`Page` is a wrapper instance that groups the object instances available in a template.

The `Page` object in front templates has the following properties:

* Context: The current request's HttpContext object (`System.Web.HttpContext`). *
* Request: The current request's Request object (`System.Web.HttpRequest`). *
* Response: The current request's Response object (`System.Web.HttpResponse`). *
* Session: The current request's SessionState object (`System.Web.SessionState`). *
* ViewData: The current context's ViewDataDictionary object (`System.Web.Mvc.ViewDataDictionary`).
* Html: The current context's HtmlHelper object (`System.Web.Mvc.HtmlHelper`).
* Url: The current context's UrlHelper object (`System.Web.Mvc.UrlHelper`).
* NoCache: Sets `System.Web.HttpCacheability.NoCache` on the current request's response (`bool`).
* User: The current request's Principal object (`Systen.Sequrity.Principal.IPrincipal`). *
* Template: Template helpers.

* In many site templates, cookies cannot be used to improve CDN reusability.
Therefore, operations involving session or user identification must be implemented only in cart templates.
If such operations are required in a site template, a paid customization request is required to change the CDN cache settings.

### Html Helpers
In cart templates, the ASP.NET MVC `Html` object is available through `Page.Html`.
Similarly, the ASP.NET MVC `Url` object is available through `Page.Url`.

#### Links and URLs Helpers
```cshtml
<!-- Generates <a href="/Home/About">About Us</a> -->
@Page.Html.ActionLink("About Us", "About", "Home")

<!-- Generates /Home/Contact -->
@Page.Url.Action("Contact", "Home")
```

#### Forms
```cshtml
<form>
    @Page.Html.SessionAntiForgeryToken()
    @Page.Html.TextBox("input name", value, new { attr = "attr value" })
    @Page.Html.DropDownList("select name", 
                    Enumerable.Range(1,10)
                                .Select(i=>new SelectListItem{ Value=i+"", Text=i+"" }), "選択してください", new { attr = "attr value" })
    @Page.Html.CheckBox("checkbox name", checked, new { attr = "attr value" })
    @Page.Html.RadioButton("radio name", value, checked, new { attr = "attr value" })
</form>
```

#### Partial Views
You can render partial views with the `HtmlHelper.Partial` method. In cart templates, use this instead of `Include` to preserve the MVC context.

```cshtml
@Page.Html.Partial("PartialLoginStatus", new { Message = "" })
@* Commerble also provides the PartialEx extension, which accepts ViewData as its third argument. *@
@Page.Html.PartialEx("PartialLoginStatus", new { Message = "" }, new { Prop1 = 1 })
```

### Separating Page and Partial Responsibilities

`Page.cshtml` is the page entry point and should be limited to shared processing such as:

* Resolving the target page from the current URL.
* Choosing the `Layout` and `Partial`.
* Preparing the shared `ViewBag`, canonical, breadcrumb, and page-wide metadata.
* Calling the body template with `@Include(vm.Partial, vm)`.

Body generation by page type, semantics for products/tags/news, SKU-level rendering, and page-type-specific JSON-LD belong in the corresponding `Partial`. Do not add `GroupCode` branches to `Page.cshtml` to contain body logic.

When handling JSON-LD in `Page.cshtml`, limit it to cross-page information such as the shared breadcrumb and canonical. Do not override the responsibility of the `Partial`, which knows the body content.

### Template Helpers
Template helpers are API functions available in site and cart templates.

See [template-helpers.md](./template-helpers.md) for details.

## Database Object

The `Database` object can issue read queries against the tenant-specific database defined in Commerble CMS to search and retrieve CMS data.


See [$metadata--cms.xml](./$metadata--cms.xml) for the CMS DB schema. However, because the namespaces and class names differ from the XML values, project the results into anonymous types or custom types defined in an `@functions{}` block.

### Database.Query

Executes a query against the DB and returns `IEnumerable<TResult>`. Results are always cached, so customize the cache key to bypass the default cache behavior.

```cshtml
@{
    // Uses a cache key based on the generated SQL and applies the default cache duration.
    var example1 = Database.Query(db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    // Customize the cache key.
    var example2 = Database.Query(new { MyCacheKey = "Product(1)" }, db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    // Recommended: SQL is parameterized and the compiled result can be reused.
    var example3 = Database.Query(new { id = 1 }, (db, args) => 
        from p in db.Products
        where p.Id == args.id
        select new {
            p.Id,
            p.Name,
        }
    );
}
```

### Database.Single

Executes a query against the DB and returns `TResult`. Results are always cached, so customize the cache key to bypass the default cache behavior.

```cshtml
@{
    // Uses a cache key based on the generated SQL and applies the default cache duration.
    var example1 = Database.Single(db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
    // Customize the cache key.
    var example2 = Database.Single(new { MyCacheKey = "Product(1)" }, db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
    // Recommended: SQL is parameterized and the compiled result can be reused.
    var example3 = Database.Single(new { id = 1 }, (db, args) => (
        from p in db.Products
        where p.Id == args.id
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
}
```

### Database.Builder

```cshtml
@{
    var sort = Page.Request.QueryString["sort"] ?? "asc";
    
    // Create a query builder from the base query (i).
    var builder = Database.Builder(db =>
        from p in db.Products
        select new {
            p.Id,
            p.Name,
            p.UnitPrice
        }
    );

    // Append a query operation based on the condition.
    if(sort == "desc") {
        builder.Append(q => q.OrderByDescending(p => p.UnitPrice)); (ii)
    }
    else {
        builder.Append(q => q.OrderBy(p => p.UnitPrice));
    }

    var cacheKey = new { sort };

    // Get the count.
    var total = builder.Count(cacheKey);

    // After getting the count, append a query to limit the number of results (iii).
    builder.Append(q => q.Take(10));
    
    // Retrieve only the requested number of records from the DB.
    var items = builder.Execute(cacheKey);

    /*
    -- Each Append call adds a filter using the current query as its FROM source.
    (
        -- (iii)
        SELECT TOP(10) *
        FROM (
            -- (ii)
            SELECT *
            FROM (
                -- (i)
                SELECT Id, Name, UnitPrice
                FROM Products
            )
            ORDER BY UnitPrice DESC
        )
    )
    */
}
``

## Shared Templates

Some templates are concatenated with other templates at runtime inside Commerble. These are called shared templates, and the following templates are configured as shared templates in many tenants.

* ModdSharedViewStart
* ModdSharedFunctions
* ModdSharedHelpers

The `ModdShared` prefix does not necessarily mean that a template is shared. In this repository, check the `sharedTemplates` setting in `sync.ts`.

## Route Parameters

You can receive route parameters through `ViewBag` by configuring routing in the CMS administration screen.

```cshtml
@*
 Assume the CMS routing settings define the URL pattern
 `dev/{Param1}/{*Params}` for this template.
 Also assume that `Param1` is registered as an integer and `Params` as a URL string.
*@

@{
    var param1 = (int)ViewBag.Param1;
    var @params = (string)ViewBag.Params;
}
```

## Execution
The URL mapping for a front template depends on the routing settings in the administration screen. If you are an AI agent, ask a human operator to verify the mapping.