# Mail Templates
Mail templates use the `.cshtml` extension and Razor syntax. See [razor.md](./razor.md) for details about Razor.

Mail and front templates both use the `.cshtml` extension, so their folder placement is the only way to distinguish them in the repository. Mail templates must be placed in the folder configured by `mailTemplatePrefix` in `sync.js`. This is usually set to `Mail`, so all `.cshtml` files under `templates/Mail/` are treated as mail templates.

## Template Names
Template files are organized in folders in this repository, but are registered in Commerble with a flat name formed by joining the folder names below the `templates` folder when synchronized.

Examples:
* templates/Mail/CustomerOrderPc.cshtml -> MailCustomerOrderPc
* templates/Mail/AdminInquiryContact.cshtml -> MailAdminInquiryContact

Template file names must match `[a-zA-Z][a-zA-Z0-9_]*`. Therefore, do not follow the ASP.NET convention of prefixing partial view file names with `_`.

## Shared Templates
Mail templates do not have a shared-template feature that automatically concatenates templates inside Commerble as front templates do. However, `sync.js` simulates this behavior: the template specified by the `mailSharedTemplatePath` setting in `sync.js` is concatenated to the beginning of each mail template before synchronization. Put shared logic in that template.

## ViewBag.Parameters
Mail template rendering arguments are stored in `ViewBag.Parameters` as a dictionary of strings.

```cshtml
@{
    var orderId = long.Parse((string)ViewBag.Parameters["orderId"]);
}
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

You can call the rendering API endpoint to inspect the rendered result without actually sending an email.


```pwsh
# Template to render
$templateName = "MailCustomerOrderPc"

# Request body
$body = @{
    RequestState = @{
        Parameters = @{ orderId = "3" };
        RequestId = 0;
        MailMessage = @{};
        MailRequest = @{
            Id = 0;
            MailType = 0;
            TemplateName = $templateName;
            SendAt = (Get-Date -Format "o");
            Sender = "sender@invalid";
            Recipient = "recipient@invalid";
            RelateId = $null;
            UserNo = $null;
            TemplateData = "";
        };
        MailHistory = $null;
    };
    SubjectEncoding = $true;
}

$json = $body | ConvertTo-Json

# API call
## AI agents should use node sync.ts rest to avoid npm-related output
## node sync.ts rest post "/mail/render" "$json"
npm run rest post "/mail/render" "$json"
```