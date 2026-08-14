# Management Web API
Web APIs are available to create, update, and delete EC data, CMS data, and metadata.

Each API endpoint is provided through OData (v4).

## EC Data

OData metadata: ./$metadata--ec.xml
REST API URL prefix: /ec

Example
```
node sync.ts rest get "/ec/Products"
```

## CMS Data

OData metadata: ../tenant/$metadata--cms.xml
REST API URL prefix: /cms

Example
```
node sync.ts rest get "/cms/SiteConfigs"
```

## Metadata

OData metadata: ./$metadata--meta.xml
REST API URL prefix: /meta

Example
```
node sync.ts rest get "/meta/Templates"
```