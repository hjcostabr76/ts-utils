module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        }
    },
    plugins: ['react'],
    settings: {
        react: {
            version: true,
        }
    },
    extends: [
        './ts.js',
        './rules/.eslint-rules.react.js',
    ],
    rules: {
        'operator-linebreak': ['off'],
    },
}
