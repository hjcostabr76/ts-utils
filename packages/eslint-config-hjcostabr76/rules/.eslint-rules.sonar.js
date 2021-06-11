/**
 * ESLint
 * Regras do plugin Sonar JS (qualidade & prevencao de bugs).
 */
module.exports = {
    rules: {

        /* ================================================ */
        /* ==== Array ===================================== */

        'sonarjs/no-unused-collection': 'error',
        'sonarjs/no-collection-size-mischeck': 'error',

        /* ==== Arrow Function ============================ */

        /* ================================================ */
        /* ==== Assignment ================================ */

        'sonarjs/prefer-object-literal': 'error',

        /* ================================================ */
        /* ==== Block: If ================================= */

        'sonarjs/no-collapsible-if': 'error',       // ('if' -> 'if') -> 'if' (com '&')
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-same-line-conditional': 'error',
        'sonarjs/no-all-duplicated-branches': 'error',

        /* ================================================ */
        /* ==== Block: Switch ============================= */

        'sonarjs/no-small-switch': 'error',
        'sonarjs/max-switch-cases': ['warn', 20],

        /* ==== Block ===================================== */
        /* ==== Class / Interface ========================= */
        /* ==== Comment =================================== */
        /* ==== Debug ===================================== */
        /* ==== Declarations ============================== */
        /* ==== DOM ======================================= */

        /* ================================================ */
        /* ==== Error ===================================== */

        'sonarjs/no-useless-catch': 'error',

        /* ==== File ====================================== */

        /* ================================================ */
        /* ==== Function ================================== */

        'sonarjs/no-extra-arguments': 'error',
        'sonarjs/no-identical-functions': 'error',
        'sonarjs/prefer-immediate-return': 'error',
        'sonarjs/prefer-single-boolean-return': 'error',

        /* ==== Generator ================================= */
        /* ==== Globals =================================== */
        /* ==== Importation =============================== */

        /* ================================================ */
        /* ==== Looping =================================== */

        'sonarjs/prefer-while': 'error',
        'sonarjs/no-one-iteration-loop': 'error',

        /* ==== Math ====================================== */
        /* ==== Naming ==================================== */
        /* ==== Node Module =============================== */
        /* ==== React ===================================== */

        /* ================================================ */
        /* ==== Restriction =============================== */

        'sonarjs/no-redundant-jump': 'error',
        'sonarjs/no-redundant-boolean': 'error',
        'sonarjs/no-inverted-boolean-check': 'error',

        /* ================================================ */
        /* ==== Security ================================== */

        'sonarjs/no-element-overwrite': 'error',
        'sonarjs/no-duplicated-branches': 'error',
        'sonarjs/no-identical-expressions': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',

        'sonarjs/cognitive-complexity': ['error', 15],

        /* ==== Spacing =================================== */
        /* ==== String ==================================== */
        /* ==== Synchronism =============================== */

        /* ==== Syntax: Spread ============================ */

        /* ================================================ */
        /* ==== Syntax ==================================== */

        'sonarjs/no-duplicate-string': ['warn', 3],
    },
};
