/**
 * ESLint (UI)
 * Regras de lint para REACT.
 */
module.exports = {
    rules: {

        /* ==== React ===================================== */

        'react/no-typos': 'error',
        'react/no-danger': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-deprecated': 'error',
        'react/no-is-mounted': 'error',
        'react/jsx-uses-react': 'error',
        'react/no-unused-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-children-prop': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/no-array-index-key': 'error',
        'react/jsx-no-useless-fragment': 'error',
        'react/no-danger-with-children': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/void-dom-elements-no-children': 'error',

        'react/sort-comp': ['error'],
        'react/jsx-no-bind': ['error'],
        'react/no-multi-comp': ['error'],
        'react/self-closing-comp': ['error'],
        'react/jsx-no-target-blank': ['warn'],
        'react/state-in-constructor': ['error'],    // Possui config padrao
        'react/require-optimization': ['error'],    // Requer 'shouldComponentUpdate' para componentes de classe
        'react/no-unescaped-entities': ['error'],
        'react/forbid-component-props': ['warn'],   // Possui config padrao
        'react/jsx-props-no-spreading': ['error'],
        'react/jsx-first-prop-new-line': ['error'], // Possui config padrao

        'react/jsx-indent-props': ['error', 4],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-space-before-closing': ['error', 'never'],
        'react/destructuring-assignment': ['error', 'never'],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/no-did-mount-set-state': ['error', 'disallow-in-func-mode'],
        'react/no-did-update-set-state': ['error', 'disallow-in-func-mode'],
        'react/no-will-update-set-state': ['error', 'disallow-in-func-mode'],

        'react/jsx-max-depth': ['error', { max: 6 }],
        'react/no-unsafe': ['error', { checkAliases: true }],
        'react/button-has-type': ['error', { reset: false }],
        'react/jsx-no-literals': ['warn', { noStrings: true }],
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'never' }],

        'react/jsx-curly-newline': ['error', {
            multiline: 'require',
            singleline: 'forbid'
        }],
        
        'react/jsx-curly-spacing': ['error', 'never', {
            allowMultiline: false,
            spacing: { objectLiterals: 'never' }
        }],
        
        'react/function-component-definition': ['error', {
            namedComponents: 'function-declaration',
            unnamedComponents: 'arrow-function',
        }],
        
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            afterOpening: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'never',
        }],
        
        'react/jsx-wrap-multilines': ['error', {
            prop: 'ignore',
            logical: 'ignore',
            arrow: 'parens-new-line',
            return: 'parens-new-line',
            condition: 'parens-new-line',
            assignment: 'parens-new-line',
            declaration: 'parens-new-line',
        }],
        
        'react/forbid-elements': ['error', {
            forbid: [
                { message: 'Use styled-components. Always.', element: 'p' },
                { message: 'Use styled-components. Always.', element: 'a' },
                { message: 'Use styled-components. Always.', element: 'td' },
                { message: 'Use styled-components. Always.', element: 'tr' },
                { message: 'Use styled-components. Always.', element: 'nav' },
                { message: 'Use styled-components. Always.', element: 'img' },
                { message: 'Use styled-components. Always.', element: 'div' },
                { message: 'Use styled-components. Always.', element: 'main' },
                { message: 'Use styled-components. Always.', element: 'body' },
                { message: 'Use styled-components. Always.', element: 'input' },
                { message: 'Use styled-components. Always.', element: 'table' },
                { message: 'Use styled-components. Always.', element: 'thead' },
                { message: 'Use styled-components. Always.', element: 'tbody' },
                { message: 'Use styled-components. Always.', element: 'button' },
                { message: 'Use styled-components. Always.', element: 'section' },
                { message: 'Use styled-components. Always.', element: 'textarea' },
            ],
        }],
        
        // OFF: Por preferencia
        'react/no-set-state': 'off',                         // NAO se aplica ao uso que fazemos
        'react/no-render-return-value': 'off',               // NAO se aplica ao uso que fazemos
        'react/prefer-read-only-props': 'off',               // NAO se aplica ao uso que fazemos
        'react/jsx-child-element-spacing': 'off',            // NAO funciona legal. Faz o codigo ficar muito feio
        'react/no-adjacent-inline-elements': 'off',          // Inutil
        'react/no-redundant-should-component-update': 'off', // NAO se aplica ao uso que fazemos
        
        'react/display-name': ['off'],              // NAO se aplica ao uso que fazemos
        'react/jsx-sort-props': ['off'],
        'react/prefer-es6-class': ['off'],
        'react/forbid-dom-props': ['off'],
        'react/jsx-no-script-url': ['off'],         // NAO permite configurar para uso dentro do padrao empregado
        'react/static-property-placement': ['off'], // NAO se aplica ao uso que fazemos
        'react/prefer-stateless-function': ['off'],
        'react/jsx-one-expression-per-line': ['error'], // Fica ruim para inclusao de strings

        // OFF: Abrangido por outra(s) regra(s)
        'react/jsx-props-no-multi-spaces': 'off', // no-multi-spaces

        'react/jsx-indent': ['off'],
        'react/jsx-pascal-case': ['off'],     // naming-convention
        'react/boolean-prop-naming': ['off'], // naming-convention

        // OFF: Cobertas pelo TSC
        'react/no-this-in-sfc': 'off',
        'react/require-render-return': 'off',

        'react/prop-types': ['off'],
        'react/no-string-refs': ['off'],
        'react/sort-prop-types': ['off'],
        'react/style-prop-object': ['off'],
        'react/jsx-handler-names': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/no-unknown-property': ['off'],
        'react/no-unused-prop-types': ['off'],
        'react/require-default-props': ['off'],
        'react/jsx-sort-default-props': ['off'],
        'react/forbid-foreign-prop-types': ['off'],
        'react/default-props-match-prop-types': ['off'],
    }
};
