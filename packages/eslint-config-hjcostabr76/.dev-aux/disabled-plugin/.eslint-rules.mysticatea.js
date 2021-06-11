/**
 * ESLint
 * Regras de plugin Mysticatea (propositos gerais).
 */
module.exports = {
    rules: {

        /* ================================================ */
        /* ==== Array ===================================== */

        // OFF: Abrangido por outra(s) regra(s)
        '@mysticatea/no-instanceof-array': 'off',   // unicorn

        /* ================================================ */
        /* ==== Arrow Function ============================ */

        // OFF: Abrangido por outra(s) regra(s)
        '@mysticatea/arrow-parens': 'off',  // eslint

        /* ==== Assignment ================================ */
        /* ==== Block ===================================== */

        /* ================================================ */
        /* ==== Class / Interface ========================= */

        // OFF: Por preferencia
        '@mysticatea/no-this-in-static': 'off',

        /* ==== Comment =================================== */
        /* ==== Declarations ============================== */
        /* ==== DOM ======================================= */
        /* ==== Error ===================================== */
        /* ==== File ====================================== */
        /* ==== Function ================================== */
        /* ==== Generator ================================= */

        /* ================================================ */
        /* ==== Globals =================================== */

        '@mysticatea/no-instanceof-wrapper': 'error',   // barra uso de 'instance of' para classes 'nativas'

        /* ==== Importation =============================== */

        /* ================================================ */
        /* ==== Looping =================================== */

        // OFF: Por preferencia
        '@mysticatea/prefer-for-of': 'off', // 'for... of' > 'array.forEach()'

        /* ==== Math ====================================== */
        /* ==== Naming ==================================== */
        /* ==== Node Module =============================== */
        /* ==== React ===================================== */

        /* ==== Restriction: apply / call ================= */
        /* ==== Restriction: casting / typing ============= */
        /* ==== Restriction: debug ======================== */
        /* ==== Restriction: Label ======================== */

        /* ================================================ */
        /* ==== Restriction =============================== */

        // OFF: Abrangido por outra(s) regra(s)
        '@mysticatea/block-scoped-var': 'off',  // var eh proibido

        /* ==== Security ================================== */
        /* ==== Spacing =================================== */
        /* ==== String ==================================== */
        /* ==== Synchronism =============================== */

        /* ================================================ */
        /* ==== Syntax: Spread ============================ */

        '@mysticatea/no-useless-rest-spread': 'error',

        /* ================================================ */
        /* ==== Syntax ==================================== */

        '@mysticatea/no-use-ignored-vars': 'warn',  // Ignorar retorno de funcoes

        // OFF: Coberta pelo TSC
        '@mysticatea/no-literal-call': 'off',
    },
};
