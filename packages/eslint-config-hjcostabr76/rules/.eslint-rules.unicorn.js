/**
 * ESLint (BACK END)
 * Regras do plugin Unicorn (propositos gerais).
 */
module.exports = {
    rules: {

        /* ================================================ */
        /* ==== Array ===================================== */

        'unicorn/prefer-set-has': 'error',  // set.has() > array.includes() > array.indexOf()
        'unicorn/prefer-includes': 'error', // set.has() > array.includes() > array.indexOf()

        'unicorn/no-array-instanceof': 'error',     // Forca uso de 'Array.isArray()'
        'unicorn/prefer-negative-index': 'error',   // barra calculo de index relativo ao comprimento (quando ha melhor alternativa)
        'unicorn/no-unreadable-array-destructuring': 'error',

        // OFF: Abrangido por outra(s) regra(s)
        'unicorn/prefer-flat-map': 'off',   // array-func

        /* ==== Arrow Function ============================ */
        /* ==== Assignment ================================ */
        /* ==== Block ===================================== */
        /* ==== Class / Interface ========================= */

        /* ================================================ */
        /* ==== Comment =================================== */

        // OFF: Por preferencia
        'unicorn/expiring-todo-comments': ['off'],

        // OFF: Abrangido por outra(s) regra(s)
        'unicorn/no-abusive-eslint-disable': 'off', // eslint-comments

        /* ==== Declaration =============================== */

        /* ================================================ */
        /* ==== DOM ======================================= */

        // OFF: Por preferencia
        'unicorn/prefer-dataset': 'off',

        // OFF: Por preferencia: (NAO se aplica ao Back End)
        'unicorn/prefer-node-append': 'off',
        'unicorn/prefer-node-remove': 'off',
        'unicorn/prefer-text-content': 'off',
        'unicorn/prefer-query-selector': 'off',
        'unicorn/prefer-modern-dom-apis': 'off',

        /* ================================================ */
        /* ==== Debug ===================================== */

        // OFF: Abrangido por outra(s) regra(s)
        'unicorn/no-console-spaces': 'off', // console eh proibido

        /* ================================================ */
        /* ==== Error ===================================== */

        'unicorn/error-message': 'error',
        'unicorn/throw-new-error': 'error',     // exige lancamento de erro instanciavel
        'unicorn/prefer-type-error': 'error',
        'unicorn/custom-error-definition': 'error',

        'unicorn/catch-error-name': ['error', { ignore: ['^err(or)?$'] }],  // normatiza nome da variavel que recebe 01 erro / excecao

        /* ================================================ */
        /* ==== File ====================================== */

        // OFF: Por preferencia
        'unicorn/filename-case': ['off'],

        /* ================================================ */
        /* ==== Function ================================== */

        // OFF: Por preferencia
        'unicorn/consistent-function-scoping': 'off',

        /* ==== Generator ================================= */

        /* ================================================ */
        /* ==== Globals =================================== */

        'unicorn/new-for-builtins': 'error',    // barra instanciacao de classes 'nativas'

        /* ==== Importation: export ======================= */
        /* ==== Importation: export default =============== */

        /* ================================================ */
        /* ==== Importation =============================== */

        // OFF: Por preferencia
        'unicorn/import-index': ['off'],    // Nao se aplica devido a formato de importacao utilizado

        /* ================================================ */
        /* ==== Looping =================================== */

        
        // OFF: Abrangido por outra(s) regra(s)
        'unicorn/no-for-loop': 'off', // typescript // 'for... of' > 'for'
        
        // OFF: Regra deprecada
        // 'unicorn/no-fn-reference-in-iterator': 'error',

        /* ================================================ */
        /* ==== Math ====================================== */

        'unicorn/no-zero-fractions': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-number-properties': 'error',    // Forca escrita da classe 'Number'

        /* ================================================ */
        /* ==== Naming ==================================== */

        'unicorn/prevent-abbreviations': ['error', {
            
            extendDefaultReplacements: false,
            extendDefaultAllowList: true,
            
            checkDefaultAndNamespaceImports: 'internal', // nao valida variaveis de modulos externos importados
            checkShorthandImports: 'internal', // nao valida variaveis de modulos externos importados
            checkShorthandProperties: false, // nao valida props de obj explodido
            checkFilenames: false,
            
            allowList: {}, // nao entendi
            ignore: [],

            replacements: {
                arr: { array: true },
                cb: { callback: true },
                conf: { config: true },
                ctx: { context: true },
                cur: { current: true },
                curr: { current: true },
                dest: { destination: true },
                dirs: { directories: true },
                doc: { document: true },
                e: { event: true },
                el: { element: true },
                elem: { element: true },
                envs: { environments: true },
                ev: { event: true },
                evt: { event: true },
                ext: { extension: true },
                exts: { extensions: true },
                fn: { func: true },
                len: { length: true },
                mod: { module: true },
                num: { number: true },
                pkg: { package: true },
                prod: { production: true },

                rel: {
                    related: true,
                    relationship: true,
                },

                ret: { returnValue: true },
                retval: { returnValue: true },
                sep: { separator: true },
                stdDev: { stdDeviation: true },
                tbl: { table: true },
                tit: { title: true },
                val: { value: true },
                ver: { version: true }
            },
        }],

        // OFF: Por preferencia
        'unicorn/no-keyword-prefix': ['off'],

        /* ==== Node Module =============================== */
        /* ==== React ===================================== */

        /* ================================================ */
        /* ==== Restriction: apply / call ================= */

        'unicorn/prefer-reflect-apply': 'error',    // 'Reflect.apply()' > 'genericObj.apply()' (seguraca) / (legibilidade)

        /* ==== Restriction: casting / typing ============= */
        /* ==== Restriction: debug ======================== */
        /* ==== Restriction: Label ======================== */

        /* ================================================ */
        /* ==== Restriction =============================== */

        'unicorn/no-reduce': 'warn',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-hex-escape': 'error',   // Numeros em hexadecimal
        'unicorn/prefer-event-key': 'error',
        'unicorn/no-unused-properties': 'error',

        // OFF: Por preferencia
        'unicorn/prefer-add-event-listener': ['off'],

        // OFF: Abrangido por outra(s) regra(s)
        'unicorn/no-process-exit': 'off',   // no restricted syntax

        /* ==== Security ================================== */
        /* ==== Spacing =================================== */

        /* ================================================ */
        /* ==== String: Regex ============================= */

        'unicorn/better-regex': 'error',    // legibilidade
        'unicorn/no-unsafe-regex': 'error', // seguranca

        /* ================================================ */
        /* ==== String ==================================== */

        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-trim-start-end': 'error',

        // OFF: Por preferencia
        'unicorn/string-content': ['off'],      // nao funcionou conforme o esperado
        'unicorn/prefer-replace-all': 'off',    // complica a tipagem

        // OFF: Abrangido por outra(s) regra(s)
        'unicorn/prefer-starts-ends-with': 'off',   // typescript

        /* ==== Synchronism =============================== */

        /* ================================================ */
        /* ==== Syntax: Spread ============================ */

        // OFF: Por preferencia
        'unicorn/prefer-spread': 'off', // Array.from() eh, supostamente, mais rapido do que [...array]

        /* ================================================ */
        /* ==== Syntax ==================================== */

        'unicorn/no-nested-ternary': 'error',
        'unicorn/no-useless-undefined': 'error',

        'unicorn/no-null': ['error'],

        // OFF: Por preferencia
        'unicorn/escape-case': 'off',
        'unicorn/explicit-length-check': ['off'],

        // OFF: Abrangido por outra(s) regra(s)
        'unicorn/prefer-optional-catch-binding': 'off', // no unused vars
    },
};
