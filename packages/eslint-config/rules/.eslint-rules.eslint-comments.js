/**
 * ESLint
 * Regras para plugin eslint-comments (para regulamentar uso de COMENTARIOS de REGRAS de LINT).
 */
module.exports = {
    rules: {

        /* ==== Comment =================================== */

        'eslint-comments/no-unused-enable': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/disable-enable-pair': 'error',
        'eslint-comments/no-duplicate-disable': 'error',
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/no-aggregating-enable': 'error',

        'eslint-comments/no-use': ['error', {
            allow: ['eslint-enable', 'eslint-disable', 'eslint-disable-line']
        }],

        // OFF: Por preferencia
        'eslint-comments/require-description': 'off',
        'eslint-comments/no-restricted-disable': ['off']
    },
};
