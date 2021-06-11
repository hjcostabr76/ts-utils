module.exports = {
    extends: './ts.js',
    rules: {
        'import/no-absolute-path': ['error'],
        'no-restricted-imports': ['off'],
        'import/group-exports': 'off',
        'import/no-default-export': 'off',
        'import/no-unused-modules': ['off'],
        'max-classes-per-file': ['off'],
        'import/no-commonjs': ['off'],
    }
}
