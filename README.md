# ESLint Plugin

  This ESLint plugin enforces the use of `import * as some from ''` instead of default import.

## Installation

  You can install this plugin using npm:

  ```bash
  npm install eslint-plugin-custom-imports --save-dev
  ```

## Usage
  Add the plugin to your ESLint configuration:

  ```json
  {
    "plugins": [
      "custom-imports"
    ],
    "rules": {
      "custom-imports/require-import-as-namespace": "error"
    }
  }
  ```