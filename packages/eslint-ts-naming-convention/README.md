# eslint-ts-naming-conventions

> Config generator for [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) plugin [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforces-naming-conventions-for-everything-across-a-codebase-naming-convention) rule.

This package helps to keep code naming conventions up to date as your projects grow. If you use eslint shared configs you can update it to share your updates among many projects but still keep the small differences from one project to another different.

It generates a .js file containing the [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforces-naming-conventions-for-everything-across-a-codebase-naming-convention) rule definition ready to be extended in your .eslintrc.js file.

Allows full customization upon its default config.

## Table of contents:

- [Instalation](#Installation)
- [Usage](#Usage)
- [Default Settings](#Default-general-settings)


## Installation
```
$ npm i eslint-ts-naming-conventions
```

## Usage

You can set how your rule configuration should be

```ts
import eslintTsNamingConventions from 'eslint-ts-naming-convention'

await eslintTsNamingConventions({

    reportLevel: 'warn',
    filePath: '.eslint-ts-naming-conventions.js',

    // Here you can set variables shared across multiple configs for the rule
    general: {
        functionPrefixes: ['create', 'retrieve', 'search', 'delete'],
        booleanPrefixesLC: ['is', 'should', 'enable', 'require'],
        booleanPrefixesUC: ['IS', 'ENABLE'],
        arraySuffixesLC: ['s', 'List'],
        arraySuffixesUC: ['S', 'LIST'],
    },

    // Here you provide your own configs to overwrite defaults as you like
    specific: [
        {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
        },
    ]
)
```

The above code will generate the _.eslint-ts-naming-conventions.js_ file whose content will look like:

```js
module.exports = {
    rules: {
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "variable",
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ],
                "leadingUnderscore": "allow"
            },
            {
                "selector": "variable",
                "types": [
                    "boolean"
                ],
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ],
                "custom": {
                    "match": true,
                    "regex": "^[is|should|enable|require|force|IS|ENABLE]"
                }
            },
            {
                "selector": "variable",
                "types": [
                    "array"
                ],
                "format": [
                    "camelCase",
                    "PascalCase",
                    "UPPER_CASE"
                ],
                "custom": {
                    "match": true,
                    "regex": "[s|List|S|LIST]$"
                }
            },
            {
                "selector": "function",
                "format": [
                    "camelCase"
                ],
                "custom": {
                    "match": true,
                    "regex": "^[create|retrieve|search|delete]"
                }
            },
        ]
    }
}
```

Finally in your _.eslintrc.js_ file you extend your fresh generated config:

```js
module.exports = {
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    extends: './.eslint-ts-naming-convention.js',
}
```

## Default general settings

Here is the default value for 'general' configuration property.

```ts
export const DEFAULT_SETTINGS: Required<GeneralSettingsTP> = {
    
    classSuffixes: [],
    
    enumSuffixes: ['Enum'],
    interfacePrefixes: ['I'],
    typeSuffixes: ['TP'],
    typeSuffixesGenerics: ['GTP'],
    
    arraySuffixesUC: ['S', 'ARRAY', 'LIST'],
    arraySuffixesLC: ['s', 'array', 'Array', 'List'],
    booleanPrefixesUC: ['IS', 'ENABLE', 'REQUIRE', 'FORCE', 'DONT'],
    booleanPrefixesLC: ['is', 'are', 'should', 'must', 'can', 'have', 'has', 'did', 'dont', 'will', 'enable', 'require', 'force'],

    functionPrefixes: [
        'add',
        'are',
        'bond',
        'build',
        'check',
        'concat',
        'create',
        'delete',
        'disable',
        'divide',
        'does',
        'enable',
        'execute',
        'find',
        'finish',
        'fix',
        'get',
        'grant',
        'handle',
        'has',
        'initialize',
        'is',
        'list',
        'merge',
        'mount',
        'multiply',
        'onChange',
        'onError',
        'parse',
        'preValidate',
        'register',
        'remove',
        'run',
        'save',
        'search',
        'send',
        'set',
        'sort',
        'split',
        'start',
        'strip',
        'subtract',
        'sum',
        'throw',
        'transform',
        'update',
        'validate',
        'verify',
        'warn',
    ],
}
```