# 管理WEBAPI
ECデータ、CMSデータ、メタデータを作成・更新・削除するためのWEBAPIがあります。

各APIエンドポイントはOData(v4)で提供されます。

## ECデータ

ODataメタデータ: ./$metadata--ec.xml
REST API URLプレフィックス: /ec

例
```
node sync.ts rest "/ec/Products"
```

## CMSデータ

ODataメタデータ: ./$metadata--cms.xml
REST API URLプレフィックス: /cms

例
```
node sync.ts rest "/cms/SiteConfigs"
```

## メタデータ

ODataメタデータ: ./$metadata--meta.xml
REST API URLプレフィックス: /meta

例
```
node sync.ts rest "/meta/Templates"
```