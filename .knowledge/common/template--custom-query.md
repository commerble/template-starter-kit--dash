# Custom Query Templates
Custom query templates use the `.csx` extension and C# script syntax.
The expression without a terminating semicolon in the root scope is returned as the final result.

## Template Names
Template files are organized in folders in this repository, but are registered in Commerble with a flat name formed by joining the folder names below the `templates` folder when synchronized.

Example:
* templates/Query/Orders.csx -> QueryOrders

Template file names must match `[a-zA-Z][a-zA-Z0-9_]*`. Therefore, do not follow the ASP.NET convention of prefixing partial view file names with `_`.

## Request Object
The current request's `System.Net.Http.HttpRequestMessage` is available.

```csx
using System;
using System.Linq;
using System.Web;

var qs = HttpUtility.ParseQueryString(Request.RequestUri.Query);
var parameter = qs.GetValues("s") ?? Array.Empty<string>();
```

## Database Object

The `Database` object can issue read queries against both Commerble's CMS DB and EC DB to search and retrieve data.

### Database.CMS

You can read from the CMS DB using the `Query` method to retrieve `IEnumerable<TResult>` and the `Single` method to retrieve `TResult`. Unlike front templates, the results are not cached.

```cshtml
@{
    var items = Database.CMS.Query(db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    var first = Database.CMS.Single(db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
}
```

See [$metadata--cms.xml](./$metadata--cms.xml) for the CMS DB schema.

### Database.EC
Unlike front templates, you can perform full read operations on the EC DB.
You can use the `Query` method to retrieve `IEnumerable<TResult>` and the `Single` method to retrieve `TResult`.

```cshtml
@{
    var items = Database.EC.Query(db => 
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    );
    var first = Database.EC.Single(db => (
        from p in db.Products
        where p.Id == 1
        select new {
            p.Id,
            p.Name,
        }
    ).FirstOrDefault());
}
```

See [$metadata--ec.xml](./$metadata--ec.xml) for the EC DB schema.

## Execution

You can execute a template by calling its API endpoint. Select JSON or CSV for the response with the `$format` query parameter. For CSV, the result must be a flat, non-nested `TResult[]` or an array of string dictionaries, `IDictionary<string, string>[]`.


```pwsh
# Load the .env file
gci . | ?{ $_.Name -eq '.env' } | get-content | ?{ $_ -notlike '#*'} | %{ $key, $value = $_.split('=', 2); set-content env:\$key $value; }

# API endpoint
$ep = $env:CBAPI_ENDPOINT

# API credentials
$c = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $env:CBAPI_USERNAME, (ConvertTo-SecureString $env:CBAPI_PASSWORD -AsPlainText -Force)

# Template to execute
$templateName = "QueryOrders"

# Response format
$format = "json" ## or "csv"

# API call
irm "$ep/query/render?name=$templateName&`$format=$format" -Credential $c
```