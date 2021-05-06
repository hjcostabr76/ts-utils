
/**
 * ESLint: Typescript
 * -- Naming-convention rule definition --
 *
 * NOTE: This file is generated
 */
module.exports = {
    rules: {
    "@typescript-eslint/naming-convention": [
        "error",
        {
            "selector": "default",
            "format": [
                "camelCase",
                "UPPER_CASE"
            ],
            "trailingUnderscore": "forbid"
        },
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
                "regex": "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
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
                "regex": "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
            }
        },
        {
            "selector": "function",
            "format": ["camelCase"],
        },
        {
            "selector": "parameter",
            "format": [
                "camelCase"
            ],
            "leadingUnderscore": "allow"
        },
        {
            "selector": "parameter",
            "types": [
                "boolean"
            ],
            "format": [
                "camelCase"
            ],
            "leadingUnderscore": "allow",
            "custom": {
                "match": true,
                "regex": "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force)"
            }
        },
        {
            "selector": "parameter",
            "types": [
                "array"
            ],
            "format": [
                "camelCase"
            ],
            "leadingUnderscore": "allow",
            "custom": {
                "match": true,
                "regex": "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))$"
            }
        },
        {
            "selector": "property",
            "format": [
                "camelCase"
            ],
            "leadingUnderscore": "forbid"
        },
        {
            "selector": "property",
            "types": [
                "string",
                "number",
                "function"
            ],
            "format": [
                "camelCase"
            ],
            "leadingUnderscore": "forbid"
        },
        {
            "selector": "property",
            "types": [
                "array"
            ],
            "format": [
                "camelCase"
            ],
            "leadingUnderscore": "forbid",
            "custom": {
                "match": true,
                "regex": "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))$"
            }
        },
        {
            "selector": "property",
            "types": [
                "boolean"
            ],
            "format": [
                "camelCase"
            ],
            "leadingUnderscore": "forbid",
            "custom": {
                "match": true,
                "regex": "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force)"
            }
        },
        {
            "selector": "property",
            "modifiers": [
                "readonly"
            ],
            "format": [
                "camelCase",
                "UPPER_CASE"
            ],
            "leadingUnderscore": "forbid"
        },
        {
            "selector": "property",
            "types": [
                "string",
                "number",
                "function"
            ],
            "modifiers": [
                "readonly"
            ],
            "format": [
                "camelCase",
                "UPPER_CASE"
            ],
            "leadingUnderscore": "forbid"
        },
        {
            "selector": "property",
            "types": [
                "array"
            ],
            "modifiers": [
                "readonly"
            ],
            "format": [
                "camelCase",
                "UPPER_CASE"
            ],
            "leadingUnderscore": "forbid",
            "custom": {
                "match": true,
                "regex": "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
            }
        },
        {
            "selector": "property",
            "types": [
                "boolean"
            ],
            "modifiers": [
                "readonly"
            ],
            "format": [
                "camelCase",
                "UPPER_CASE"
            ],
            "leadingUnderscore": "forbid",
            "custom": {
                "match": true,
                "regex": "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
            }
        },
        {
            "selector": "method",
            "format": ["camelCase"],
            "custom": {
                "match": true,
                "regex": "^(add|are|bond|build|check|concat|create|debug|delete|disable|divide|does|enable|execute|find|finish|fix|get|grant|handle|has|initialize|is|list|merge|mount|multiply|onChange|onError|parse|preValidate|register|remove|run|save|search|send|set|sort|split|start|strip|subtract|sum|throw|transform|update|validate|verify|warn)"
            }
        },
        {
            "selector": "enum",
            "format": [
                "PascalCase"
            ],
            "suffix": [
                "Enum"
            ]
        },
        {
            "selector": "enumMember",
            "format": [
                "UPPER_CASE"
            ]
        },
        {
            "selector": "class",
            "format": [
                "PascalCase"
            ]
        },
        {
            "selector": "interface",
            "format": [
                "PascalCase"
            ],
            "prefix": [
                "I"
            ]
        },
        {
            "selector": "typeAlias",
            "format": [],
            "suffix": [
                "T"
            ],
            "leadingUnderscore": "forbid"
        },
        {
            "selector": "typeParameter",
            "format": [],
            "suffix": [
                "T"
            ],
            "leadingUnderscore": "forbid"
        }
    ]
},
};
