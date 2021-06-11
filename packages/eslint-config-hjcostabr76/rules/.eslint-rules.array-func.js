/**
 * ESLint
 * Regras do plugin array-func (para arrays).
 */
module.exports = {
    rules: {

        /* ==== Array ===================================== */

        'array-func/from-map': 'error',         // forca uso do 'map' embutido em 'array from'
        'array-func/prefer-flat': 'error',      // forca uso de 'flat' invez de combinacoes equivalentes
        'array-func/prefer-flat-map': 'error',  // 'map().flat()' -> flatMap()

        'array-func/avoid-reverse': 'error',            // barra uso de 'array.reverse()'  (quando ha melhor substituto)
        'array-func/prefer-array-from': 'error',        // invez de 'spread' (performance)
        'array-func/no-unnecessary-this-arg': 'error',  // barra passagem de parametro para binding
    },
};
