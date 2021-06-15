/**
 * TODO: Checar os todo's
 */
 module.exports = {
    env: {
        node: true,
        es2020: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    reportUnusedDisableDirectives: true,
    parser: '@typescript-eslint/parser',
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts']
        },
        'import/resolver': {
            typescript: { alwaysTryTypes: true }
        },
        'import/extensions': ['.ts'],
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'sonarjs',
        'unicorn',
        '@getify/eslint-plugin-proper-arrows',
        'eslint-comments',
        'import',
        'array-func',
        'promise',
        'deprecation',
    ],
    extends: [
        './rules/.eslint-rules.array-func.js',
        './rules/.eslint-rules.eslint.js',
        './rules/.eslint-rules.eslint-comments.js',
        './rules/.eslint-rules.import.js',
        './rules/.eslint-rules.promise.js',
        './rules/.eslint-rules.proper-arrows.js',
        './rules/.eslint-rules.sonar.js',
        './rules/.eslint-rules.typescript.js',
        './rules/.eslint-rules.unicorn.js',
    ],
    rules: {
        'deprecation/deprecation': 'warn',  // alerta contra o uso de recursos marcados com '@deprecated'
    },
}
