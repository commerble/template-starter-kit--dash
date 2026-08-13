# Coding Rules

## cshtml (Razor)
Razor can contain C#, but it is not pure C# source. It is also not a pure HTML file.
Its contents can mix many types of content, including C# code blocks, HTML, JavaScript inside `script` tags, CSS inside `style` tags, and JSON.
Unlike a complete ASP.NET project developed in Visual Studio, Commerble template development does not have support from LSP or IntelliSense.
Keep these constraints in mind.
The following are the coding rules for this repository.

### 1. Define constant names in uppercase and keep them flat
Because IntelliSense is unavailable, define constants in uppercase so they can be recognized as constants.
Also define them flat, without wrapping them in a class, so definitions and references can be found with search tools.
Use `_` to separate words.
**OK**  
```
// A single mouse double-click or keyboard shortcut selects the name and makes searching straightforward.
// Search results can also be narrowed mostly to the definition and reference locations.
const string SERVICE_VALUES_REMARKS = "Remarks";
const string SERVICE_VALUES_SUBSCRIBE = "Subscribe";
```

**NG**  
```
class ServiceValues {
    public static string Remarks = "Remarks";
    public static string Subscribe = "Subscribe";
}
// ServiceValues.Remarks
// Because mouse double-clicks and keyboard shortcuts treat `.` as a separator,
// a single action selects either ServiceValues or Remarks.
// Searching for only ServiceValues or Remarks also returns unwanted lines.
```

### 2. Keep classes close to POCOs
Razor compiles template text into C# source. During this process, one wrapper class is generated automatically and the template text is expanded inside it, so every class written in a Razor template becomes a nested class.

Essential helper objects such as `Page`, `ViewBag`, and `Database` are all declared as properties of the wrapper class.

The wrapper class name is also generated randomly, so it cannot be identified and the wrapper class cannot be passed as a typed value to a nested class.

As a result, methods in nested classes cannot properly call helper objects or custom helper methods defined in shared templates.

Use nested classes only to define data structures and methods that use values within the nested class. Define operation methods as methods of the wrapper class.

```
class ViewModel {
    public string Code { get; set; }
    ...
    // NG
    public static ViewModel Create() {
        // Database is not visible here.
        return Database.Single(...);
    }
}

// OK
ViewModel LoadViewModel() {
    return Database.Single(...);
}
```

Following this rule, also avoid code that initializes values in a constructor. Define factory methods as methods of the wrapper class rather than providing them inside nested classes.
This makes the implementation look somewhat similar to code written in Go or Rust.

If a constructor is essential, always provide a default constructor. This is because `Jil.JSON`, which can be used in Commerble Razor, creates an empty instance during serialization.
Jil handles this with try-catch, so it does not become a runtime error. However, Commerble employees may catch the exception generated at this point while debugging, making the investigation more difficult. Please follow this rule.


### 3. Keep modifiers modest

Razor compiles template text into C# source. During this process, one class is generated automatically and the template text is expanded inside it, so every class written in a Razor template becomes a nested class. Therefore, it does not pollute the global namespace.

Also, the POCO rule above means that setters are not made private, so fine-grained use of `private` and `protected` is unnecessary.

For `sealed`, active use is recommended because it may avoid covariance checks in the JIT layer.

### 4. Use query syntax for database access through the `Database` object

Write queries that may perform database access using LINQ query syntax. Use the Fluent API when processing data retrieved from the database in C# RAM.

The reverse arrangement does not cause an execution problem, but keep them distinct to reduce cognitive load during performance tuning and debugging.

Because syntax sugar such as the null-propagating operator cannot be handled as an expression, there is always a distinction between the portion expanded into SQL and the portion executed as CIL. It is therefore important to make the two easy to distinguish.

### 5. Use the K&R style for `if` and `for` braces

Although this differs from C# conventions, use K&R style. Because LSP and IntelliSense are unavailable, Razor syntax errors output an excerpt around the line where the error occurred. Write the Razor logic so that it contains as few low-information lines as possible; this makes the error easier to locate.

### 6. Prefer `ToList`, `ToArray`, or `ToDictionary` when applicable

If you only call `Add` or a similar method once, use `ToList` or a similar conversion method.

**OK**  
```
var breadcrumbItems = 
    vm.Breadcrumbs.Select((b,i) => new Dictionary<string, object> {
        ["@type"] = "ListItem",
        ["position"] = i + 1,
        ["name"] = b.name,
        ["item"] = urlPrefix + b.url
    }).ToList();
```

**NG**
```
var breadcrumbItems = new List<Dictionary<string, object>>(vm.Breadcrumbs.Count); // If creating it empty first, specify the capacity whenever possible.
breadcrumbItems.AddRange(vm.Breadcrumbs.Select((b,i) => new Dictionary<string, object> {
    ["@type"] = "ListItem",
    ["position"] = i + 1,
    ["name"] = b.name,
    ["item"] = urlPrefix + b.url
}));
// AddRange is called only once.
```

**OK**  
```
var breadcrumbItems = new List<Dictionary<string, object>>();
breadcrumbItems.AddRange(vm.Breadcrumbs.Select((b,i) => new Dictionary<string, object> {
    ["@type"] = "ListItem",
    ["position"] = i + 1,
    ["name"] = b.name,
    ["item"] = urlPrefix + b.url
}));
breadcrumbItems.Add(new Dictionary<string, object> {
    ["@type"] = "ListItem",
    ["position"] = i + 1,
    ["name"] = b.name,
    ["item"] = urlPrefix + b.url
});
```