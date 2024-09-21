# ESLint Plugin

This ESLint plugin enforces the use of `import * as some from ''` instead of default import.

## Installation

You can install this plugin using npm:

```bash
npm i eslint-plugin-require-import-as-namespace --save-dev
```

## Usage

Add the plugin to your ESLint configuration:

```json
{
  "plugins": ["require-import-as-namespace"],
  "rules": {
    "require-import-as-namespace/require-import-as-namespace": "error"
  }
}
```
