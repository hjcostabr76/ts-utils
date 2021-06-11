/**
 * ESLint
 * Regras do plugin 'promise' (normatizar uso de promises / assincronicidade).
 */
module.exports = {
    rules: {

        /* ==== Synchronism =============================== */

        'promise/no-nesting': 'error',  // 'encadeamento' > 'aninhamento'
        'promise/param-names': 'error', // 'resolve' & 'reject'
        'promise/prefer-await-to-then': 'warn',
        'promise/no-return-in-finally': 'error',    // nao eh contemplado por 'no-unsafe-finally'
        'promise/no-promise-in-callback': 'error',  // ?
        'promise/prefer-await-to-callbacks': 'warn',

        'promise/always-return': ['warn'],
        'promise/no-return-wrap': ['error'],    // 'return foo' > 'Promise.resolve(foo)'

        'promise/catch-or-return': ['error', {  // promises nao retornadas devem incluir tratamento de falha TODO: Checar se considera 'await'
            allowThen: false,
            allowFinally: false,
            terminationMethod: false,
        }],

        // OFF: Por preferencia
        'promise/avoid-new': 'off',                 // forca utilizacao de 01 'teceira' biblioteca
        'promise/no-callback-in-promise': 'off',    // forca utilizacao de 01 'teceira' biblioteca

        // OFF: Cobertas pelo TSC
        'promise/no-native': 'off',
        'promise/valid-params': 'off',
        'promise/no-new-statics': 'off',
    }
}
