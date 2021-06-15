
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
                "regex": "^(are|can|did|disable|dont|enable|force|has|have|is|match|must|require|should|use|was|will|IS|ENABLE|REQUIRE|FORCE|DONT|USE)"
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
            "format": [
                "camelCase"
            ],
            "custom": {
                "match": true,
                "regex": "^(add|alert|are|ask|begin|bind|bond|break|build|cancel|change|check|close|compute|concat|conclude|connect|create|debug|delete|derive|did|didnt|direct|disable|disconnect|divide|do|does|doesnt|dont|double|drive|enable|engage|erase|execute|explode|extract|find|finish|fix|get|give|grab|grant|handle|has|have|hide|initialize|install|is|list|lock|make|match|merge|mix|mount|move|multiply|notify|onChange|onClick|onClose|onCreate|onDelete|onError|onFinish|onUpdate|open|parse|pick|place|preValidate|print|pull|put|quit|raise|redirect|redo|register|remove|reset|revert|run|save|search|select|sell|send|set|should|show|solve|sort|split|start|strip|subscribe|subtract|sum|take|throw|to|transform|treat|truncate|unbind|uncheck|undo|uninstall|unmount|unregister|unsubscribe|upsert|validate|verify|warn|was|wasnt|will|witch|write|zero)"
            }
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
                "regex": "^(are|can|did|disable|dont|enable|force|has|have|is|match|must|require|should|use|was|will)"
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
                "regex": "^(are|can|did|disable|dont|enable|force|has|have|is|match|must|require|should|use|was|will)"
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
                "regex": "^(are|can|did|disable|dont|enable|force|has|have|is|match|must|require|should|use|was|will|IS|ENABLE|REQUIRE|FORCE|DONT|USE)"
            }
        },
        {
            "selector": "method",
            "format": [
                "camelCase"
            ],
            "custom": {
                "match": true,
                "regex": "^(add|alert|are|ask|begin|bind|bond|break|build|cancel|change|check|close|compute|concat|conclude|connect|create|debug|delete|derive|did|didnt|direct|disable|disconnect|divide|do|does|doesnt|dont|double|drive|enable|engage|erase|execute|explode|extract|find|finish|fix|get|give|grab|grant|handle|has|have|hide|initialize|install|is|list|lock|make|match|merge|mix|mount|move|multiply|notify|onChange|onClick|onClose|onCreate|onDelete|onError|onFinish|onUpdate|open|parse|pick|place|preValidate|print|pull|put|quit|raise|redirect|redo|register|remove|reset|revert|run|save|search|select|sell|send|set|should|show|solve|sort|split|start|strip|subscribe|subtract|sum|take|throw|to|transform|treat|truncate|unbind|uncheck|undo|uninstall|unmount|unregister|unsubscribe|upsert|validate|verify|warn|was|wasnt|will|witch|write|zero)"
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
            ],
            "suffix": []
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
            "format": [
                "PascalCase"
            ],
            "suffix": [
                "T"
            ],
            "leadingUnderscore": "forbid"
        },
        {
            "selector": "typeParameter",
            "format": [
                "PascalCase"
            ],
            "custom": {
                "match": true,
                "regex": "^([A-Z]|([A-Z][a-z\\d]+)*[A-Z]?(T))$"
            },
            "leadingUnderscore": "forbid"
        }
    ]
},
};
        