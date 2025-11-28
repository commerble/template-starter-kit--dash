# Razor Syntax Guide (.NET Framework)

This document provides a reference for the Razor view engine syntax used in Commerble EC PaaS. It's based on RazorEngine (.NET Framework version). It is distinct from Razor for ASP.NET Core or Blazor.

## Basics

Razor allows you to mix HTML and C# code in the same file. The `@` character transitions from HTML to C#.

### Inline Expressions
Use `@` to output the value of a variable or expression.

```cshtml
<!-- Outputting a variable -->
<p>Hello, @Model.Name!</p>

<!-- Outputting an expression -->
<p>The current time is: @DateTime.Now</p>
<p>2 + 2 = @(2 + 2)</p>
```

### Code Blocks
Use `@{ ... }` for multi-line C# code blocks. Code inside these blocks is executed but not rendered unless explicitly output.

```cshtml
@{
    var message = "Welcome to our site";
    var showMessage = true;
    Layout = "Layout.cshtml";
}

@if(showMessage) {
    <h1>@message</h1>
}
```

### Explicit Content Transition (`<text>`)
Use the `<text>` tag to output plain text from within a code block without wrapping it in an HTML element. The `<text>` tags themselves are not rendered.

```cshtml
@if (Model.HasDiscount) {
    <text>This item is on sale!</text>
}
```

Alternatively, you can use `@:` for a single line of content.

```cshtml
@if (Model.IsNew) {
    @: New Arrival!
}
```

### HTML Encoding and Raw Output (`Raw`)
By default, Razor encodes string output to prevent XSS attacks. If you need to render HTML markup stored in a variable, use the `Raw` method.

```cshtml
@{
    var htmlContent = "<strong>Bold Text</strong>";
}

<!-- Encoded output: &lt;strong&gt;Bold Text&lt;/strong&gt; -->
<p>@htmlContent</p>

<!-- Raw output: <strong>Bold Text</strong> -->
<p>@Raw(htmlContent)</p>
```

## ViewBag and ViewData

`ViewBag` and `ViewData` are mechanisms to pass data from a controller to a view, or between a view and its layout. They share the same underlying collection, but offer different access styles.

### ViewBag
`ViewBag` is a dynamic object. You can assign any property to it on the fly.

```cshtml
@{
    ViewBag.Title = "Home Page";
    ViewBag.CurrentDate = DateTime.Now;
}

<title>@ViewBag.Title</title>
<p>Today is: @ViewBag.CurrentDate</p>
```

### ViewData
`ViewData` is a dictionary of objects (`ViewDataDictionary`). It requires type casting when reading complex types and uses string keys.

```cshtml
@{
    ViewData["Title"] = "Home Page";
    ViewData["CurrentDate"] = DateTime.Now;
}

<title>@ViewData["Title"]</title>
<p>Today is: @ViewData["CurrentDate"]</p>
```

Since they share the same underlying storage, `ViewBag.Title` and `ViewData["Title"]` refer to the same value.

## Model Binding

You can strongly type a view using the `@model` directive. This allows you to access the data passed to the view via the `Model` property with IntelliSense support (in supported editors).

### Defining the Model Type
At the top of your view file, specify the type of the model.

```cshtml
@model Contact

<!-- Or using a fully qualified name -->
@model Commerble.Sandbox.Services.ViewModels.Contact
```

### Accessing Model Data
Use the `Model` property to access the data.

```cshtml
<h1>@Model.ProductName</h1>
<p>Price: @Model.Price</p>

@if (Model.IsInStock) {
    <button>Add to Cart</button>
}
```

## Control Structures

### Conditionals (`if`, `else`, `switch`)

```cshtml
@if (Model.IsAdmin)
{
    <button>Edit</button>
}
else
{
    <span>Read Only</span>
}
```

### Loops (`foreach`, `for`, `while`)

```cshtml
<ul>
    @foreach (var item in Model.Items)
    {
        <li>@item.Name - $@item.Price</li>
    }
</ul>
```

## Partial Views

Use the `@Include()` method to render and include the content of another template file.

```cshtml
<!-- Page.cshtml -->
@Include("PartialTemplate1")

<!-- Passing a model to the partial -->
@Include("PartialTemplate2", new { Message = "Hello" })

<!-- PartialTemplate1.cshtml -->
<p>This is rendered in PartialTemplate1.cshtml</p>

<!-- PartialTemplate2.cshtml -->
@model dynamic
<p>This is rendered in PartialTemplate2.cshtml</p>
<p>Message = @Model.Message</p>
```

## Layouts and Sections

### Defining a Layout
Layouts act as templates. Use `@RenderBody()` to specify where the view content goes.

```cshtml
<!-- _Layout.cshtml -->
<html>
<head>
    <title>@ViewBag.Title</title>
    @RenderSection("Scripts", required: false)
</head>
<body>
    <div class="container">
        @RenderBody()
    </div>
</body>
</html>
```

### Using a Layout
```cshtml
@{
    Layout = "Layout.cshtml";
    ViewBag.Title = "Home Page";
}

<p>This is the main content.</p>

@section Scripts {
    <script src="custom.js"></script>
}
```

## Comments
Server-side comments are not sent to the browser.

```cshtml
@* This is a server-side comment. It won't appear in the HTML source. *@
<!-- This is an HTML comment. It WILL appear in the browser. -->
```

## Common Directives
*   `@model TypeName`: Specifies the type of the `Model` property.
*   `@using Namespace`: Imports a namespace.
*   `@functions { ... }`: Defines functions/methods within the view.
*   `@helper ReturnTypeName HelperName(ParamType ParamName, ...) { ... }`: Defines a custom helper.

### Functions Block

The `@functions` block allows you to define C# methods and properties that are available throughout the view.

```cshtml
@functions {
    public string GetGreeting(string name) {
        return "Hello, " + name;
    }
}

<p>@GetGreeting("User")</p>
```

### Custom Helpers

The `@helper` directive allows you to create reusable snippets of Razor markup within a view.

```cshtml
@helper RenderPrice(decimal price) {
    if (price == 0) {
        <span>Free</span>
    } else {
        <span>$@price</span>
    }
}

<!-- Usage -->
<p>Item 1: @RenderPrice(0)</p>
<p>Item 2: @RenderPrice(10.50m)</p>
```
