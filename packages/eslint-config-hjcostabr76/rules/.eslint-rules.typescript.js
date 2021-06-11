/**
 * ESLint (BACK END)
 * Regras para uso de typescript (propositos gerais).
 */
module.exports = {
    rules: {

        /* ================================================ */
        /* ==== Array ===================================== */

        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/require-array-sort-compare': 'warn',

        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

        // OFF: Abrangida por outra(s) regra(s)
        '@typescript-eslint/prefer-includes': 'off',    // unicorn

        /* ==== Arrow Function ============================ */
        /* ==== Assignment ================================ */

        /* ==== Block: If ================================= */

        /* ================================================ */
        /* ==== Block: Switch ============================= */

        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        /* ================================================ */
        /* ==== Block ===================================== */

        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],

        /* ================================================ */
        /* ==== Class / Interface ========================= */

        '@typescript-eslint/no-misused-new': 'error',   // Classe: 'construtor' / Interface: 'new'
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'], // 'readonly foo' ou 'get foo()'

        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],

        '@typescript-eslint/member-ordering': ['error', {
            'default': [

                // Fields
                'public-static-field',
                'protected-static-field',
                'private-static-field',

                'public-abstract-field',
                'public-instance-field',

                'protected-abstract-field',
                'protected-instance-field',

                'private-abstract-field',
                'private-instance-field',

                // Methods
                'constructor',

                'public-static-method',
                'public-abstract-method',
                'public-instance-method',

                'protected-static-method',
                'protected-abstract-method',
                'protected-instance-method',

                'private-static-method',
                'private-abstract-method',
                'private-instance-method',
              ]
        }],

        '@typescript-eslint/no-extraneous-class': ['warn', {    // preferir objeto a classes estaticas
            allowEmpty: false,
            allowStaticOnly: false,
            allowConstructorOnly: true,
            allowWithDecorator: true,
        }],

        // OFF: Por preferencia
        '@typescript-eslint/prefer-function-type': 'off',       // Proibe interfaces que possuam apenas assinatura de 01 funcao
        '@typescript-eslint/no-parameter-properties': ['off'],  // Construtores

        // OFF: Cobertas pelo TSC
        '@typescript-eslint/no-dupe-class-members': 'off',

        /* ================================================ */
        /* ==== Comment =================================== */

        '@typescript-eslint/ban-ts-comment': ['error'],

        // OFF: Abrangida por outra(s) regra(s)
        '@typescript-eslint/prefer-ts-expect-error': 'off', // eslint-comments

        /* ================================================ */
        /* ==== Declarations ============================== */

        '@typescript-eslint/prefer-as-const': 'error',      // exige notacao para transformar objetos em "const's"
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',    // proibe atribuir valor padrao para tipos genericos

        '@typescript-eslint/prefer-readonly': ['error'],
        '@typescript-eslint/prefer-nullish-coalescing': ['error'],

        // OFF: Por preferencia
        '@typescript-eslint/init-declarations': 'off',

        /* ==== DOM ======================================= */

        /* ================================================ */
        /* ==== Error ===================================== */

        // OFF: Abrangida por outra(s) regra(s)
        '@typescript-eslint/no-throw-literal': 'off',  // exigencia de lancamento de erro instanciavel (unicorn)

        /* ================================================ */
        /* ==== File ====================================== */

        /* ================================================ */
        /* ==== Function ================================== */

        '@typescript-eslint/unified-signatures': 'warn',            // unir overloadings que puderem ser unidos
        '@typescript-eslint/adjacent-overload-signatures': 'error', // declarar overloads sempre juntos

        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['constructors'] }],

        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
            allowTypedFunctionExpressions: true
        }],

        // OFF: Por preferencia
        '@typescript-eslint/prefer-readonly-parameter-types': ['off'],

        /* ==== Generator ================================= */
        /* ==== Globals =================================== */

        /* ==== Importation: export ======================= */
        /* ==== Importation: export default =============== */

        /* ================================================ */
        /* ==== Importation =============================== */

        // OFF: Abrangida por outra(s) regra(s)
        '@typescript-eslint/no-var-requires': 'off',    // plugin import (nao atribuir retorno de 'require()' a 01 variavel)
        '@typescript-eslint/no-require-imports': 'off', // plugin import (import > require)

        /* ================================================ */
        /* ==== Looping =================================== */

        '@typescript-eslint/prefer-for-of': 'error',    // 'for... of' > 'for'
        '@typescript-eslint/no-for-in-array': 'error',

        /* ==== Math ====================================== */

        /* ================================================ */
        /* ==== Naming ==================================== */

        '@typescript-eslint/no-this-alias': ['error'],  // soh vale 'self'

        /* ================================================ */
        /* ==== Node Module =============================== */

        // OFF: Por preferencia (Nao desenvolvemos modulos, no momento)
        '@typescript-eslint/prefer-namespace-keyword': 'off',

        /* ==== React ===================================== */

        /* ==== Restriction: apply / call ================= */

        /* ================================================ */
        /* ==== Restriction: casting / typing ============= */

        '@typescript-eslint/no-unsafe-call': 'warn',            // Chamada de tipo 'any' como funcao
        '@typescript-eslint/no-unsafe-return': 'warn',          // Desabilita tipar funcao com 'any'
        '@typescript-eslint/no-unsafe-assignment': 'warn',      // Tipar variavel como 'any'
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',   // Acessar propriedades de 01 tipo 'any'

        '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
        '@typescript-eslint/no-extra-non-null-assertion': ['error'],

        '@typescript-eslint/no-explicit-any': ['warn', {
            fixToUnknown: false,
            ignoreRestArgs: true,
        }],

        '@typescript-eslint/consistent-type-assertions': ['warn', { // 'const foo: T = {}' > 'const foo = {} as T'
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
        }],

        /* ==== Restriction: debug ======================== */
        /* ==== Restriction: Label ======================== */

        /* ================================================ */
        /* ==== Restriction =============================== */

        '@typescript-eslint/no-unnecessary-qualifier': 'error', // namespaces
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        '@typescript-eslint/no-namespace': ['error'],
        '@typescript-eslint/dot-notation': ['error'],   // coibe uso de 'computed keys'
        '@typescript-eslint/no-unused-expressions': ['error'],

        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

        '@typescript-eslint/triple-slash-reference': ['error', {
            path: 'never',
            types: 'never',
            lib: 'never',
        }],

        '@typescript-eslint/ban-types': ['error', {
            extendDefaults: false,
            types: {
                String: {
                    message: 'Use string instead',
                    fixWith: 'string',
                },
                Boolean: {
                    message: 'Use boolean instead',
                    fixWith: 'boolean',
                },
                Number: {
                    message: 'Use number instead',
                    fixWith: 'number',
                },
                Symbol: {
                    message: 'Use symbol instead',
                    fixWith: 'symbol',
                },
                // object typing
                Object: {
                    message: "Avoid using this as it doesn't really mean anything. Some meaningful better options: 'AnyObjT', 'unknown', etc.",
                    fixWith: 'unknown',
                },
                '{}': {
                    message: "Avoid using this as it doesn't really mean anything. Some meaningful better options: 'AnyObjT', 'unknown', etc.",
                    fixWith: 'unknown',
                },
                object: {
                    fixWith: 'unknown',
                    message: [
                        'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
                        "Some meaningful better options: 'AnyObjT', 'unknown', etc.",
                    ].join('\n'),
                },
            }
        }],

        // OFF: Por preferencia
        '@typescript-eslint/no-type-alias': ['off'],
        '@typescript-eslint/no-magic-numbers': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],         // Nao da certo (muitos falsos positivos)
        '@typescript-eslint/no-unnecessary-condition': ['off'],     // Nao da certo (muitos falsos positivos)
        '@typescript-eslint/strict-boolean-expressions': ['off'],
        '@typescript-eslint/consistent-type-definitions': ['off'],  // type X interface

        // OFF: Abrangido por outra(s) regra(s)
        '@typescript-eslint/no-extra-semi': 'off',  // Ponto & virgula eh proibido
        
        '@typescript-eslint/no-unused-vars': ['off'],                   // Abrangido por tsconfig
        '@typescript-eslint/explicit-module-boundary-types': ['off'],   // Abrangido por exigencias de tipagem
        
        // OFF: Cobertas pelo TSC
        '@typescript-eslint/typedef': ['off'],
        '@typescript-eslint/no-unused-vars-experimental': ['off'], // no-unused-vars

        /* ================================================ */
        /* ==== Security ================================== */

        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-dynamic-delete': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],

        // OFF: Por preferencia
        '@typescript-eslint/no-invalid-void-type': ['off'],

        /* ================================================ */
        /* ==== Spacing: Space ============================ */

        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
        '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

        '@typescript-eslint/space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],

        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: false,
            after: true,
            overrides: {
                arrow: { before: true, after: true }
            }
        }],

        /* ================================================ */
        /* ==== Spacing: Lines ============================ */

        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        /* ================================================ */
        /* ==== String: Regex ============================= */

        '@typescript-eslint/prefer-regexp-exec': 'error',

        /* ================================================ */
        /* ==== String ==================================== */

        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],

        // OFF: Abrangido por outra(s) regra(s)
        '@typescript-eslint/no-base-to-string': ['off'],    // Normatizacao de template strings

        /* ================================================ */
        /* ==== Synchronism =============================== */

        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/await-thenable': 'error',           // 'await' apenas onde for necessario

        '@typescript-eslint/no-misused-promises': ['error'],    // nao tratar promises como se fossem sincronas
        '@typescript-eslint/promise-function-async': ['error'], // metodos asincronos devem ter 'async'

        '@typescript-eslint/return-await': ['error', 'in-try-catch'],   // retorno de promise, dentro de 'try->catch' deve ser aguardado

        // OFF: Abrangido por outra(s) regra(s)
        '@typescript-eslint/no-floating-promises': ['off'], // plugin promise

        /* ==== Syntax: Spread ============================ */

        /* ================================================ */
        /* ==== Syntax ==================================== */

        '@typescript-eslint/prefer-reduce-type-parameter': 'error', // normatiza chamadas de 'reduce()'

        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/method-signature-style': ['error', 'property'], // (types / interfaces) | (foo: (): void => {}) > (foo(): void)

        '@typescript-eslint/member-delimiter-style': ['error', {
            singleline: {
                delimiter: 'comma',
                requireLast: false,
            },
            multiline: {
                delimiter: 'comma',
                requireLast: true,
            },
            overrides: {
                interface: {
                    multiline: {
                        delimiter: 'none',
                        requireLast: false
                    }
                }
            }
        }],

        // OFF: Por preferencia
        '@typescript-eslint/no-extra-parens': ['off'],  // acusa falso positivos & barra melhorias de legibilidade
    },
};
