/**
 * ESLint (BACK END)
 * Regras do plugin 'node' (propositos gerais).
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

        /* ================================================ */
        /* ==== Error ===================================== */

        'node/no-callback-literal': 'error',    // forca assinatura 'correta' (erro como 1o param) para callbacks

        'node/handle-callback-err': ['error', '^\w*[eE](xception|rror)$'],

        // OFF: Abrangido por outra(s) regra(s)
        'node/process-exit-as-throw': 'off',    // 'process.exit()' eh proibido

        /* ==== File ====================================== */
        /* ==== Function ================================== */
        /* ==== Generator ================================= */

        /* ================================================ */
        /* ==== Globals =================================== */

        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/text-encoder': ['error', 'always'],
        'node/prefer-global/text-decoder': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],

        /* ================================================ */
        /* ==== Importation: export ======================= */

        'node/no-exports-assign': 'error',

        // OFF: Por preferencia
        'node/exports-style': ['off'],  // 'module.exports' eh proibido

        /* ==== Importation: export ======================= */
        /* ==== Importation: export default =============== */

        /* ================================================ */
        /* ==== Importation =============================== */

        // OFF: Por preferencia
        'node/no-new-require': 'off',           // ('require' eh desabilitado)
        'node/global-require': 'off',           // ('require' eh desabilitado) require deve estar no 'topo' do arquivo

        'node/no-mixed-requires': ['off'],      // ('require' eh desabilitado) importacoes devem estar isoladas do resto
        'node/no-extraneous-require': ['off'],  // ('require' eh desabilitado) garante registro de dependencia no package.json
        'node/no-restricted-require': ['off'],  // ('require' eh desabilitado)

        'node/no-missing-import': 'off',    // Nao se aplica devido a formato de importacao utilizado
        'node/no-missing-require': 'off',   // Nao se aplica devido a formato de importacao utilizado

        // OFF: Abrangido por outra(s) regra(s)
        'node/no-restricted-import': ['off'],       // eslint: no-restricted-imports
        'node/no-extraneous-import': ['off'],       // plugin import (garante registro de dependencia no package.json)
        'node/file-extension-in-import': ['off'],   // plugin import

        /* ==== Looping =================================== */
        /* ==== Math ====================================== */
        /* ==== Naming ==================================== */

        /* ================================================ */
        /* ==== Node Module =============================== */

        // OFF: Por preferencia (Nao desenvolvemos modulos, no momento)
        'node/shebang': 'off',  // *

        'node/no-unpublished-bin': ['off'],
        'node/no-unpublished-import': ['off'],
        'node/no-unpublished-require': ['off'],

        /* ==== React ===================================== */
        /* ==== Restriction =============================== */

        /* ================================================ */
        /* ==== Security ================================== */

        'node/no-path-concat': 'error',
        'node/callback-return': 'error',

        'node/no-deprecated-api': ['error'],
        'node/no-unsupported-features/es-builtins': ['error'],
        'node/no-unsupported-features/node-builtins': ['error'],

        // OFF: Por preferencia
        'node/no-unsupported-features/es-syntax': ['off'],  // acusa falso positivo

        // OFF: Abrangido por outra(s) regra(s)
        'node/no-process-env': 'off',   // No restricted syntax
        'node/no-process-exit': 'off',  // No restricted syntax

        /* ==== Spacing =================================== */
        /* ==== String ==================================== */

        /* ================================================ */
        /* ==== Synchronism =============================== */

        'node/no-sync': 'warn', // (performance)
        'node/prefer-promises/fs': 'error',
        'node/prefer-promises/dns': 'error',

        /* ==== Syntax ==================================== */
    },
};
