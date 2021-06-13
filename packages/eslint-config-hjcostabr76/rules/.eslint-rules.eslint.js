/**
 * ESLint (BACK END)
 * Regras nativas (propositos gerais).
 */
module.exports = {
    rules: {

        /* ================================================ */
        /* ==== Array ===================================== */

        'no-sparse-arrays': 'error',    // atribuicao
        'array-bracket-spacing': ['error', 'never'],
        'array-bracket-newline': ['error', 'consistent'],
        'array-element-newline': ['error', 'consistent'],

        // OFF: Por preferencia
        'array-callback-return': ['off'],

        // OFF: Abrangido por outra(s) regra(s)
        'no-array-constructor': 'off',  // typescript

        /* ================================================ */
        /* ==== Arrow Function ============================ */

        'arrow-parens': ['error', 'as-needed'],
        'arrow-body-style': ['error', 'as-needed'],
        'implicit-arrow-linebreak': ['error', 'beside'],

        'no-confusing-arrow': ['error', { allowParens: true }],
        'arrow-spacing': ['error', { before: true, after: true }],

        /* ================================================ */
        /* ==== Assignment ================================ */

        'no-func-assign': 'error',      // TODO: sera que o tsc ja nao garante isso?
        'no-class-assign': 'error',     // TODO: sera que o tsc ja nao garante isso?
        'no-import-assign': 'error',    // TODO: sera que o tsc ja nao garante isso?

        'no-multi-assign': 'error', // barra declaracao de varias variaveis numa mesma expressao
        'symbol-description': 'error',

        'no-return-assign': ['error', 'always'],

        /* ================================================ */
        /* ==== Block: If ================================= */

        'no-lonely-if': 'error',    // ('else' -> 'if') -> 'else if'
        'no-dupe-else-if': 'error',
        'no-else-return': ['error'],

        /* ================================================ */
        /* ==== Block: Switch ============================= */

        'no-fallthrough': 'warn',
        'default-case-last': 'error',
        'no-duplicate-case': 'error',
        'no-case-declarations': 'error',

        'default-case': ['error', { commentPattern: '^no(-| )default$' }],
        'switch-colon-spacing': ['error', { after: true, before: false }],

        /* ================================================ */
        /* ==== Block ===================================== */

        'no-lone-blocks': 'error',

        'curly': ['error', 'multi-or-nest'],
        'nonblock-statement-body-position': ['error', 'below'],

        'no-empty': ['error', { allowEmptyCatch: true }],   // keyword: Error

        // OFF: Por preferencia
        'padded-blocks': 'off',
        'max-statements': 'off',

        // OFF: Abrangido por outra(s) regra(s)
        'brace-style': ['off'], // typescript

        /* ================================================ */
        /* ==== Class / Interface ========================= */

        'no-constructor-return': 'error',
        'class-methods-use-this': ['error'],    // Forca metodos estaticos

        'new-parens': ['error', 'always'],
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],

        // OFF: Por preferencia
        'accessor-pairs': 'off',

        // OFF: Abrangido por outra(s) regra(s)
        'no-useless-constructor': 'off',        // typescript
        'lines-between-class-members': ['off'], // typescript

        // OFF: Cobertas pelo TSC
        'getter-return': 'off',
        'no-setter-return': 'off',
        'constructor-super': 'off',
        'no-this-before-super': 'off',
        'no-dupe-class-members': 'off',

        /* ================================================ */
        /* ==== Comment =================================== */

        'spaced-comment': ['error', 'always', {
            line: {
                markers: ['/'],
            },
            block: {
                markers: ['*'],
                balanced: true,
            }
        }],

        // OFF: Por preferencia
        'no-inline-comments': 'off',
        'no-warning-comments': 'off',
        'line-comment-position': 'off',

        'capitalized-comments': ['off'],    // Nao da certo. Atrapalha o desenvolvimento
        'multiline-comment-style': ['off'], // Nao da certo. Atrapalha o desenvolvimento

        /* ================================================ */
        /* ==== Declaration =============================== */

        'no-var': 'error',

        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'prefer-const': ['error', { destructuring: 'all' }],

        // OFF: Por preferencia
        'no-implicit-globals': 'off',

        // OFF: Abrangido por outra(s) regra(s)
        'no-undef-init': 'off',     // typescript
        'init-declarations': 'off', // typescript

        // OFF: Cobertas pelo TSC
        'no-const-assign': 'off',
        'no-redeclare': ['off'],

        /* ================================================ */
        /* ==== DOM ======================================= */

        'no-script-url': 'off', // nao se aplica ao Back End

        /* ================================================ */
        /* ==== Error ===================================== */

        'no-ex-assign': 'error',    // sobrescrever excessao

        'prefer-promise-reject-errors': ['error'],  // keyWord: Synchronism

        // OFF: Abrangido por outra(s) regra(s)
        'no-useless-catch': 'off',  // sonar
        'no-throw-literal': 'off',  // exigencia de lancamento de erro instanciavel (unicorn)

        /* ================================================ */
        /* ==== File ====================================== */

        'eol-last': ['error', 'always'], // todo arquivo deve ter 01 linha em branco, no final
        'max-classes-per-file': ['error', 1],

        'max-lines': ['warn', { // max de linhas do arquivo
            max: 350,
            skipBlankLines: true,
            skipComments: false,
        }],

        'max-len': ['warn', {  // max de caracteres por linha
            code: 165,
            tabWidth: 4,
            comments: 165,
            // ignorePattern: 123,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreRegExpLiterals: false,
        }],

        /* ================================================ */
        /* ==== Function ================================== */

        'no-new-func': 'error',
        'prefer-rest-params': 'error',

        'prefer-arrow-callback': ['error'], // usar callbacks sempre na forma de arrow function

        'max-depth': ['warn', 4],
        'max-params': ['warn', 4],
        'wrap-iife': ['error', 'inside'],
        'max-nested-callbacks': ['warn', 3],

        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline-arguments'],

        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

        'max-lines-per-function': ['warn', {
            max: 80,
            skipBlankLines: false,
            skipComments: true,
            IIFEs: false,
        }],

        // OFF: Por preferencia
        'no-param-reassign': 'off',

        // OFF: Abrangido por outra(s) regra(s)
        'default-param-last': 'off',    // typescript

        // OFF: Cobertas pelo TSC
        'no-dupe-args': 'off',
        'consistent-return': 'off',

        /* ================================================ */
        /* ==== Generator ================================= */

        'require-yield': 'error',
        'yield-star-spacing': ['error', { before: true, after: false }],
        'generator-star-spacing': ['error', { before: true, after: false }],

        /* ================================================ */
        /* ==== Globals =================================== */

        'no-global-assign': ['error'],  // barra sobrescrita de metodos / objetos 'nativos'
        'no-extend-native': ['error'],  // barra adicao de propriedades de objetos 'nativos'

        // OFF: Abrangido por outra(s) regra(s)
        'no-new-wrappers': 'off',   // unicorn

        // OFF: Cobertas pelo TSC
        'no-obj-calls': 'off',  // barra tentativa de instanciacao de objetos nativos nao instanciaveis

        /* ==== Importation: export ======================= */
        /* ==== Importation: export default =============== */

        /* ================================================ */
        /* ==== Importation =============================== */

        'no-restricted-imports': ['error',
            {
                'name': 'moment',
                'message': 'Use Date Utils'
            },
            {
                'name': 'moment-timezone',
                'message': 'Use Date Utils'
            },
            {
                'name': 'fs',
                'message': 'Use File Utils'
            }
        ],

        // OFF: Por preferencia
        'no-restricted-exports': 'off',
        'sort-imports': ['off'],    // Configuracao conflituosa. Nao funcionou

        // OFF: Cobertas pelo TSC
        'no-duplicate-imports': ['off'],

        /* ================================================ */
        /* ==== Looping =================================== */

        'no-loop-func': 'error',
        'for-direction': 'error',
        'no-await-in-loop': 'error',    // keyWord: Synchronism
        'no-unmodified-loop-condition': 'error',

        /* ================================================ */
        /* ==== Math ====================================== */

        'no-compare-neg-zero': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-exponentiation-operator': 'error',

        'use-isnan': ['error'],
        'radix': ['error', 'as-needed'],

        'no-mixed-operators': ['error', { allowSamePrecedence: true }],

        // OFF: Por preferencia
        'no-floating-decimal': 'off',
        'no-loss-of-precision': 'off',

        /* ================================================ */
        /* ==== Naming ==================================== */

        'no-shadow': ['error', { builtinGlobals: false, hoist: 'all' }],

        'id-length': ['warn', {
            min: 3,
            max: 35,
            exceptions: ['_', 'i', 'id', 'in'],
        }],

        'id-blacklist': ['error',   // (search help): Globals
            'Object',
            'String',
            'Number',
            'Symbol',
            // 'Array', // nao funciona (impede uso inclusive para tipagem)
            'foo',
            'bar',
            'baz',
            'chico',
        ],

        // OFF: Por preferencia
        'id-match': 'off',
        'func-names': 'off',
        'func-name-matching': 'off',

        // OFF: Abrangido por outra(s) regra(s)
        'consistent-this': ['off'], // typescript // no-this-alias

        // OFF: Cobertas pelo TSC
        'no-shadow-restricted-names': 'off',

        /* ==== Node Module =============================== */

        /* ================================================ */
        /* ==== React ===================================== */

        // OFF: Por preferencia
        'jsx-quotes': ['off'],  // NAO se aplica ao Back End // 'jsx-quotes': ['error', 'prefer-single'],

        /* ================================================ */
        /* ==== Restriction: apply / call ================= */

        'no-caller': 'error',           // barra utilizacao de 'arguments.call() / arguments.callee()' (deprecated) / (otimizacao)
        'prefer-spread': 'error',       // apply
        'no-useless-call': ['error'],   // barra utilizacao de '.call()' & '.apply()' sempre que possivel

        /* ================================================ */
        /* ==== Restriction: casting / typing ============= */

        'no-extra-boolean-cast': 'error',
        'no-implicit-coercion': ['error', { allow: ['!!', '+'] }],

        /* ================================================ */
        /* ==== Restriction: debug ======================== */

        'no-alert': 'error',
        'no-debugger': 'error',
        'no-console': ['error'],

        /* ================================================ */
        /* ==== Restriction: Label ======================== */

        'no-extra-label': 'error',
        'no-unused-labels': 'error',
        'no-labels': ['error', { allowLoop: true }],

        // OFF: Coberta pelo TSC
        'no-label-var': 'off',

        /* ================================================ */
        /* ==== Restriction =============================== */

        'no-octal': 'error',
        'no-octal-escape': 'error',

        'no-proto': 'error',    // desabilita acesso a '__proto__'
        'no-bitwise': 'error',
        'no-sequences': 'error',
        'no-delete-var': 'error',
        'no-new-object': 'error',   // '{}' > 'new Object()'
        'no-extra-bind': 'error',
        'no-empty-pattern': 'error',    // desabilita 01 padrao especifico
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-constant-condition': 'warn',

        'no-useless-rename': ['error'],

        'strict': ['error', 'never'],               // desabilita uso de 'use strict' (ja eh aplicado automaticamente)
        'no-cond-assign': ['warn', 'always'],       // atribuicao dentro de 'if'

        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-useless-computed-key': ['error', { enforceForClassMembers: true }], // na declaracao

        'no-restricted-syntax': ['error',
            {
                'selector': 'SequenceExpression',
                'message': 'Do you really know what you\'re doing?',
            },
            {
                'selector': 'WithStatement',
                'message': 'Do you really know what you\'re doing?',
            },
        ],

        'no-restricted-properties': [
            'error',
            {
                object: 'SystemUtils',
                property: 'debug',
                message: 'Remover debugs',
            },
            {
                object: 'process',
                property: 'env',
                message: 'Use AppCFG',
            },
            {
                object: '_',
                property: 'isEmpty',
                message: 'Use SystemUtils.isEmpty (it\'s safer)',
            },
            {
                object: 'process',
                property: 'exit',
            },
        ],

        // OFF: Por preferencia
        'no-with': 'off',       // no restricted syntax
        'unicode-bom': 'off',
        'no-ternary': 'off',
        'no-continue': 'off',
        'no-iterator': 'off',   // desabilita acesso a '__iterator__'
        'no-plusplus': 'off',
        'no-undefined': 'off',
        'no-nested-ternary': 'off',
        'no-negated-condition': 'off',

        'no-void': ['off'],
        'no-restricted-globals': ['off'],

        // OFF: Abrangido por outra(s) regra(s)
        'dot-notation': 'off',          // typescript
        'no-extra-semi': 'off',
        'block-scoped-var': 'off',      // Var eh proibido
        'no-underscore-dangle': 'off',  // naming conventions

        'no-eq-null': ['off'],              // null eh proibido
        'no-unused-vars': ['off'],          // typescript
        'no-magic-numbers': ['off'],        // typescript
        'no-empty-function': ['off'],       // typescript
        'no-use-before-define': ['off'],    // typescript
        'no-unused-expressions': ['off'],   // typescript
        
        // OFF: Coberta pelo TSC
        'no-undef': ['off'],

        'no-dupe-keys': 'off',
        'no-new-symbol': 'off',

        /* ================================================ */
        /* ==== Security ================================== */

        'no-eval': 'error',
        'no-unreachable': 'error',
        'no-self-compare': 'error',
        'no-unsafe-finally': 'warn',        // abrange callbacks 'finally' para promises
        'no-prototype-builtins': 'error',   // barra alguns metodos do obj 'Object' (seguranca)

        'no-self-assign': ['error'],
        'no-inner-declarations': ['error', 'both'],
        'valid-typeof': ['error', { requireStringLiterals: true }],             // barra typos em comparacao de tipos
        'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }], // Protege contra negacao de 01 operador ao inves de 01 valor / expressao

        // OFF: Abrangido por outra(s) regra(s)
        'no-implied-eval': 'off',   // typescript

        'new-cap': ['off'],         // instanciacao de funcao eh bloqueada & nome de classes eh parametrizado
        'complexity': ['off'],      // sonar (cognitive complexity >> cyclomatic complexity)
        'guard-for-in': ['off'],    // 'for in' eh desabilitado
        'no-invalid-this': ['off'], // typescript

        // OFF: Cobertas pelo TSC
        'no-new': 'off',    // 'new' apenas para instanciacao

        /* ================================================ */
        /* ==== Spacing: Space ============================ */

        'no-whitespace-before-property': 'error',

        'no-trailing-spaces': ['error'],

        'block-spacing': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'rest-spread-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'template-curly-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

        'space-infix-ops': ['error', { int32Hint: false }],
        'semi-spacing': ['error', { before: false, after: true }],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'space-unary-ops': ['error', { words: true, nonwords: false }],
        'key-spacing': ['error', { beforeColon: false, mode: 'strict' }],

        'object-curly-spacing': ['error', 'always', {
            arraysInObjects: true,
            objectsInObjects: false
        }],

        // OFF: Por preferencia
        'no-tabs': 'off',
        'no-irregular-whitespace': ['off'], // Incomoda a utilizacao do 'align comments'

        // OFF: Abrangido por outra(s) regra(s)
        'comma-spacing': ['off'],               // typescript
        'keyword-spacing': ['off'],             // typescript
        'func-call-spacing': ['off'],           // typescript
        'space-before-function-paren': ['off'], // typescript

        /* ================================================ */
        /* ==== Spacing: Lines ============================ */

        'no-unexpected-multiline': 'error',

        'lines-around-comment': ['error'],

        'linebreak-style': ['error', 'unix'],
        'operator-linebreak': ['error', 'before'],
        'multiline-ternary': ['error', 'always-multiline'],

        'object-curly-newline': ['error', { consistent: true }],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 1,
            maxBOF: 0,
        }],

        /* ================================================ */
        /* ==== String: Regex ============================= */

        'no-regex-spaces': 'error',                 // estilo
        'no-control-regex': 'error',                // * (seguranca)
        'prefer-regex-literals': 'error',           // estilo
        'no-empty-character-class': 'error',        // otimizacao
        'no-useless-backreference': 'error',        // * (otimizacao)
        'no-misleading-character-class': 'error',   // * (seguranca)

        'no-invalid-regexp': ['error'], // seguranca

        // OFF: Por preferencia
        'require-unicode-regexp': 'off',        // forca inclusao do flag 'u'
        'prefer-named-capture-group': 'off',    // * (legibilidade / estilo)

        // OFF: Abrangido por outra(s) regra(s)
        'wrap-regex': 'off',    // forca envolver regex com paranteses
        'no-div-regex': 'off',  // barra 'confusao' de 01 regex com 01 divisao

        /* ================================================ */
        /* ==== String ==================================== */

        'no-multi-str': 'error',        // barra strings de multiplas linhas
        'prefer-template': 'error',
        'no-template-curly-in-string': 'warn',

        /* ================================================ */
        /* ==== Synchronism =============================== */

        'no-async-promise-executor': 'error',   // seguranca: Barra callback assincrono no construtor de promise

        // OFF: Por preferencia
        'require-atomic-updates': 'off',    // regra acusa falso positivo (ou nao a compreendi)

        // OFF: Abrangido por outra(s) regra(s)
        'require-await': 'off',     // typescript
        'no-return-await': 'off',   // typescript: 'return-await'

        /* ================================================ */
        /* ==== Syntax: Spread ============================ */

        'prefer-object-spread': 'error',    // Object.assign()

        /* ================================================ */
        /* ==== Syntax ==================================== */

        'eqeqeq': ['error'],

        'yoda': ['error', 'never'],
        'comma-style': ['error', 'last'],
        'quote-props': ['error', 'as-needed'],
        'dot-location': ['error', 'property'],
        'operator-assignment': ['error', 'always'],

        'max-statements-per-line': ['error', { max: 2 }],
        'object-shorthand': ['error', 'always', { avoidQuotes: true }],

        // OFF: Por preferencia
        'sort-keys': 'off',
        'sort-vars': 'off',
        'padding-line-between-statements': 'off',

        'prefer-destructuring': ['off'],

        // OFF: Abrangido por outra(s) regra(s)
        'semi': 'off',          // typescript
        'indent': 'off',        // typescript
        'quotes': 'off',        // typescript
        'vars-on-top': 'off',   // 'var''s sao proibidas

        'camelcase': ['off'],       // naming conventions
        'semi-style': ['off'],      // Ponto & virgula eh proibido
        'comma-dangle': ['off'],    // typescript // member-delimiter-style
        'no-extra-parens': ['off'],
    },
};
