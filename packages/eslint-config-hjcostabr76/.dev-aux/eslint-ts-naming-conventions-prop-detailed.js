// const namingConventionVars = require('../../../.eslint-rules/.eslint-rules.vars.js')

module.exports = {

    rules: {

        /**
         * ERROS
         */



        '@typescript-eslint/naming-convention': [
            'error',

            // propriedade

            /**
             * Propriedades PUBLIC com modificador OMITIDO:
             *
             * ?? :??
             * ?? :(string|number|function)
             * ?? :array
             * ?? :boolean
             */

            {   // ?? :??
                selector: 'property',
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },

            {   // ?? :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // ?? :array
                selector: 'property',
                types: ['array'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // ?? :boolean
                selector: 'property',
                types: ['boolean'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC READONLY com modificador OMITIDO:
             *
             * ?? readonly :??
             * ?? readonly :(string|number|function)
             * ?? readonly :array
             * ?? readonly :boolean
             */

            {   // ?? readonly :??
                selector: 'property',
                modifiers: ['readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },

            {   // ?? readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // ?? readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // ?? readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC static com modificador OMITIDO:
             *
             * ?? static :??
             * ?? static :(string|number|function)
             * ?? static :array
             * ?? static :boolean
             */

            {   // ?? static :??
                selector: 'property',
                modifiers: ['readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },

            {   // ?? static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // ?? static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // ?? static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC static READONLY com modificador OMITIDO:
             *
             * ?? static readonly :??
             * ?? static readonly :(string|number|function)
             * ?? static readonly :array
             * ?? static readonly :boolean
             */

            {   // ?? static readonly :??
                selector: 'property',
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },

            {   // ?? static readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },
            {   // ?? static readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // ?? static readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC com modificador EXPLICITO:
             *
             * public :??
             * public :(string|number|function)
             * public :array
             * public :boolean
             */

            {   // public :??
                selector: 'property',
                modifiers: ['public'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // public :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['public'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // public :array
                selector: 'property',
                types: ['array'],
                modifiers: ['public'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // public :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['public'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC READONLY com modificador EXPLICITO:
             *
             * public readonly :??
             * public readonly :(string|number|function)
             * public readonly :array
             * public readonly :boolean
             */

            {   // public readonly :??
                selector: 'property',
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },

            {   // public readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // public readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // public readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC static READONLY com modificador EXPLICITO:
             *
             * public static readonly :??
             * public static readonly :(string|number|function)
             * public static readonly :array
             * public static readonly :boolean
             */

            {   // public static readonly :??
                selector: 'property',
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },
            {   // public static readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },
            {   // public static readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // public static readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC static com modificador EXPLICITO:
             *
             * public static :??
             * public static :(string|number|function)
             * public static :array
             * public static :boolean
             */

            {   // public static :??
                selector: 'property',
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },

            {   // public static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // public static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // public static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PROTECTED:
             *
             * protected :??
             * protected :(string|number|function)
             * protected :array
             * protected :boolean
             */

            {   // protected static :??
                selector: 'property',
                modifiers: ['protected'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },

            {   // protected static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['protected'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // protected static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['protected'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // protected static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['protected'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PROTECTED readonly:
             *
             * protected readonly :??
             * protected readonly :(string|number|function)
             * protected readonly :array
             * protected readonly :boolean
             */

            {   // protected readonly static :??
                selector: 'property',
                modifiers: ['protected', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // protected readonly static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['protected', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // protected readonly static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['protected', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // protected readonly static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['protected', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PROTECTED static READONLY:
             *
             * protected static readonly :??
             * protected static readonly :(string|number|function)
             * protected static readonly :array
             * protected static readonly :boolean
             */

            {   // protected static readonly static :??
                selector: 'property',
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },
            {   // protected static readonly static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },
            {   // protected static readonly static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // protected static readonly static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PROTECTED static:
             *
             * protected static :??
             * protected static :(string|number|function)
             * protected static :array
             * protected static :boolean
             */

            {   // protected static readonly static :??
                selector: 'property',
                modifiers: ['protected', 'static'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // protected static readonly static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['protected', 'static'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // protected static readonly static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['protected', 'static'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // protected static readonly static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['protected', 'static'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PRIVATE:
             *
             * private :??
             * private :(string|number|function)
             * private :array
             * private :boolean
             */

            {   // private static :??
                selector: 'property',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // private static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // private static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['private'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // private static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['private'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PRIVATE readonly:
             *
             * private readonly :??
             * private readonly :(string|number|function)
             * private readonly :array
             * private readonly :boolean
             */

            {   // private readonly static :??
                selector: 'property',
                modifiers: ['private', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // private readonly static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['private', 'readonly'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // private readonly static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['private', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // private readonly static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['private', 'readonly'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PRIVATE static:
             *
             * private static :??
             * private static :(string|number|function)
             * private static :array
             * private static :boolean
             */

            {   // private static readonly static :??
                selector: 'property',
                modifiers: ['private', 'static'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // private static readonly static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['private', 'static'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
            },
            {   // private static readonly static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['private', 'static'],
                format: ['camelCase'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES_LC}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // private static readonly static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['private', 'static'],
                format: ['camelCase'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES_LC}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

            /**
             * Propriedades PRIVATE static READONLY:
             *
             * private static readonly :??
             * private static readonly :(string|number|function)
             * private static readonly :array
             * private static readonly :boolean
             */

            {   // private static readonly static :??
                selector: 'property',
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },
            {   // private static readonly static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
            },
            {   // private static readonly static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `[${namingConventionVars.ARRAY_SUFFIXES}$]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },
            {   // private static readonly static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                custom: {
                    regex: `^[${namingConventionVars.BOOLEAN_PREFIXES}]`,
                    match: true
                },
                leadingUnderscore: 'forbid',
            },

        ],

};
