---
name: cbsync
description: "Explain how to synchronize Commerble CMS templates with sync.ts and suggest the appropriate commands"
---

# Commerble Sync Tools

This skill supports template synchronization operations using `sync.ts`.
Based on the question, briefly provide the necessary prerequisite checks, commands, and cautions.

## Intended Uses

- Monitor builds and synchronization with `npm start`
- Upload all templates
- Upload only changed templates
- Choose between unlock and upload when using lock mode
- Troubleshoot synchronization failures caused by incomplete `.env` configuration
- Investigate Commerble Web API directly with authentication

## Prerequisite Checks

When answering, check the following as needed.

- Node.js is installed
- Dependencies are installed (`npm install` or `yarn install`)
- Assume that `.env` exists at the repository root and contains the following keys
  - `CBAPI_ENDPOINT`
  - `CBAPI_USERNAME`
  - `CBAPI_PASSWORD`
- `config` in `sync.ts` matches the requirements
  - `templateDirPath`
  - `mailTemplatePrefix`
  - `mailSharedTemplatePath`
  - `sharedTemplates`
  - `ignoreTemplates`
  - `useLockMode`

## Basic Commands

Suggest the following commands according to the user's intent.

- Synchronize while watching: `npm run upload:watch`
- Upload all files: `npm run upload:all`
- Upload specified files: `npm run upload <...files>`
- Run the REST wrapper: `npm run rest <method> <path> [bodyJson]`
- Build and upload all files: `npm run publish`
- Build and monitor synchronization at the same time: `npm start`

For direct execution:

- `node sync.ts all`
- `node sync.ts watch`
- `node sync.ts unlock <path/to/file1> <path/to/file2> ...`
- `node sync.ts upload <path/to/file1> <path/to/file2> ...`
- `node sync.ts rest <method> <path> [bodyJson]`

When an AI agent needs to parse a REST response, prefer `node sync.ts rest ...` over `npm run rest ...`.
Reason: npm may prepend its startup message, which can make response extraction unreliable.

Example:

```pwsh
node .\sync.ts rest get /meta/Templates?`$top=1
```

Expected output example:

```text
200
Content-Type: application/json; odata.metadata=minimal
{"@odata.context":"https://<data-endpoint>/meta/$metadata#Templates","value":[{"Id":1,"Name":"ModdSharedViewStart","Text":"@{}","Type":"cshtml"}]}
```

## Operating Rules

- Mail templates (`templates/Mail/`) depend on the merge process in `templates/Mail/SharedFunctions.cshtml`; avoid edits that break synchronization logic
- When `useLockMode: true`, prioritize explaining the branch state and unlock procedure
- AI agents must not read the `.env` file directly
- Do not display credentials. When necessary, check only the key names
- For errors, troubleshoot `.env` configuration, the target path, and lock state in that order
- For REST execution, troubleshoot the method/path combination, JSON string validity, and response status in that order

## Response Style

- First state what to do in 1-2 lines
- Then provide the command to run
- Show no more than 3 checks for failures