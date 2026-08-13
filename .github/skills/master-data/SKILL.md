---
name: master-data
description: "Explain how to retrieve, create, update, and delete master data using the Commerble CMS administrative Web API"
---

# Master Data Management

This skill explains how to operate EC data, CMS data, and metadata using the Commerble CMS administrative Web API.
Based on the question, briefly provide the target API, command to run, and cautions.

## Intended Uses

- Retrieve EC master data such as products and SKUs
- Retrieve CMS or site settings
- Check metadata
- Add records through the administrative Web API
- Update records through the administrative Web API
- Delete records through the administrative Web API
- Confirm how to construct OData paths and query strings

## Prerequisite Checks

When answering, check the following as needed.

- Node.js is installed
- Dependencies are installed (`npm install` or `yarn install`)
- Assume that `.env` exists at the repository root and contains the following keys
  - `CBAPI_ENDPOINT`
  - `CBAPI_USERNAME`
  - `CBAPI_PASSWORD`
- The `rest` subcommand in `sync.ts` is available
- Confirm which API contains the target data
  - EC data: `/ec`
  - CMS data: `/cms`
  - Metadata: `/meta`

## Basic Commands

Suggest the following commands according to the user's intent.

- List records: `node sync.ts rest get /ec/Products`
- Get a single record: `node sync.ts rest get /cms/SiteConfigs(1)`
- Create: `node sync.ts rest post /ec/Products '{"Code":"sample"}'`
- Update: `node sync.ts rest patch /cms/SiteConfigs(1) '{"Value":"updated"}'`
- Delete: `node sync.ts rest delete /meta/Templates(1)`

You may also suggest `npm run rest <method> <path> [bodyJson]` when appropriate,
but prefer `node sync.ts rest ...` when an AI agent handles the response.

## API Selection

- Use `/ec/...` for EC data
- Use `/cms/...` for CMS data
- Use `/meta/...` for metadata
- When the schema must be checked, assume that `.knowledge/common/$metadata--ec.xml`, `.knowledge/tenant/$metadata--cms.xml`, and `.knowledge/common/$metadata--meta.xml` should be consulted

## OData Query Examples

Examples:

```pwsh
node .\sync.ts rest get /ec/Products?`$top=10
node .\sync.ts rest get /cms/SiteConfigs?`$filter=contains(Code,'Site')
node .\sync.ts rest get /meta/Templates?`$select=Id,Name&`$top=5
```

Update example:

```pwsh
node .\sync.ts rest patch /ec/Products(1) '{"Name":"Updated Product"}'
```

Create example:

```pwsh
node .\sync.ts rest post /cms/SiteConfigs '{"Code":"Sample","Value":"test"}'
```

## Operating Rules

- First identify whether the target is under `/ec`, `/cms`, or `/meta`, then provide guidance
- For deletions and updates, reconfirm the target ID or key before providing guidance
- Keep the JSON body limited to the minimum required fields
- Do not display credentials. When necessary, check only the key names
- For errors, troubleshoot the path, HTTP method, JSON string, and response status in that order
- Template synchronization and master-data operations have different purposes; do not confuse them, and center guidance on the `rest` subcommand

## Response Style

- First state which API to use and what to do in 1-2 lines
- Then provide the command to run
- Show no more than 3 checks for failures