/**
 * ESLint
 * Regras do plugin 'import' (normatizar importacoes).
 */
module.exports = {
    rules: {

        /* ==== Array ===================================== */
        /* ==== Arrow Function ============================ */
        /* ==== Assignment ================================ */
        /* ==== Block ===================================== */
        /* ==== Class / Interface ========================= */
        /* ==== Comment =================================== */
        /* ==== Declarations ============================== */
        /* ==== DOM ======================================= */
        /* ==== Error ===================================== */
        /* ==== File ====================================== */
        /* ==== Function ================================== */
        /* ==== Generator ================================= */
        /* ==== Globals =================================== */

        /* ================================================ */
        /* ==== Importation: export ======================= */

        'import/export': 'error',           // pega erro no export
        'import/group-exports': 'error',    // forca multiplas exportacoes a serem declaradas em bloco
        'import/no-mutable-exports': 'error',

        // OFF: Por preferencia
        'import/exports-last': 'off',

        /* ================================================ */
        /* ==== Importation: export default =============== */

        'import/no-named-default': 'error', // barra uso de alias para nomear 01 default na sua importacao
        'import/no-default-export': 'error',

        // OFF: Por preferencia
        'import/no-named-as-default': 'off',        // nao funciona (falha de execucao) | barra usar nome de 01 'named' para 01 'default' do mesmo modulo
        'import/prefer-default-export': 'off',
        'import/no-named-as-default-member': 'off', // nao funciona (acusa falso positivo) | barra usar 'named' de 01 modulo como propriedade do 'default' do mesmo modulo

        'import/default': ['off'],  // valida existencia de 01 'default' importado (acusa falso positivo)

        // OFF: Abrangido por outra(s) regra(s)
        'import/no-anonymous-default-export': ['off'],  // export default eh proibido

        /* ================================================ */
        /* ==== Importation =============================== */

        'import/no-amd': 'error',           // barra formato de importacao 'amd'
        'import/no-self-import': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-webpack-loader-syntax': 'error', // barra sintaxe especifica para webpack

        'import/named': ['error'],
        'import/no-unresolved': ['error'],
        "import/dynamic-import-chunkname": ['error'],  // restringe sintaxe especifica usada com webpack
        'import/no-extraneous-dependencies': ['error'],

        'import/extensions': ['error', 'never'],
        "import/max-dependencies": ["warn", { max: 30 }],
        "import/newline-after-import": ["error", { count: 1 }],
        'import/no-unassigned-import': ['error', { allow: ['@config/**/**']}],
        'import/no-useless-path-segments': ['error', { noUselessIndex: true }],

        'import/no-unused-modules': ['warn', {
            // missingExports: true,    // nao funciona (acusa falso positivo)
            unusedExports: true,
            src: ['src/**/**/*.ts'],
        }],

        'import/no-commonjs': ['error', {
            allowRequire: false,
            allowPrimitiveModules: false,
            allowConditionalRequire: false,
        }],

        'import/order': ['error', {
            'newlines-between': 'always-and-inside-groups',
            pathGroupsExcludedImportTypes: [],  // ['builtin', 'external']
            alphabetize: { order: 'asc', caseInsensitive: false },
            'groups': [
                'builtin',
                'external',
                ['sibling', 'parent', 'index', 'internal'],
            ],
            'pathGroups': [
                {
                    pattern: '@config/**',
                    group: 'internal',
                    patternOptions: { nocomment: false },
                    position: 'after',
                },
                {
                    pattern: '@module/**',
                    group: 'internal',
                    patternOptions: { nocomment: false },
                    position: 'after',
                },
                {
                    pattern: '@project/**',
                    group: 'internal',
                    patternOptions: { nocomment: false },
                    position: 'after',
                },
                {
                    pattern: '@system/**',
                    group: 'internal',
                    patternOptions: { nocomment: false },
                    position: 'after',
                },
            ],
        }],

        // OFF: Por preferencia
        'import/no-namespace': 'off',               // barra notacao 'import * as foo'
        'import/no-named-export': 'off',
        'import/no-relative-parent-imports': 'off', // barra qualquer importacao de nivel acima (nao apenas acima da raiz)

        'import/no-cycle': ['off'],     // nao funciona (falha de execucao)
        'import/namespace': ['off'],    // nao funciona (falha de execucao)

        'import/no-absolute-path': ['off'],
        'import/no-nodejs-modules': ['off'],    // barra importacao de recursos nativos do cnode
        'import/no-restricted-paths': ['off'],  // determina combinacoes 'target-> orign' a serem restritas

        // OFF: Abrangido por outra(s) regra(s)
        'import/no-deprecated': 'off',  // plugin deprecate
        'import/no-duplicates': 'off',  // combincao de eslint:no-duplicates + import:extensions

        'import/first': ['off'],    // import: order

        /* ==== Label ===================================== */
        /* ==== Looping =================================== */
        /* ==== Math ====================================== */
        /* ==== Naming ==================================== */

        /* ================================================ */
        /* ==== Node Module =============================== */

        // OFF: Por preferencia (nao construimos modulo, por enquanto)
        'import/unambiguous': 'off',
        'import/no-internal-modules': ['off'],

        /* ==== React ===================================== */
        /* ==== Restriction =============================== */
        /* ==== Security ================================== */
        /* ==== Spacing =================================== */
        /* ==== String ==================================== */
        /* ==== Synchronism =============================== */
        /* ==== Syntax ==================================== */
    }
}
