module.exports = {
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    extends: ['hjcostabr76/ts-package'],
    rules: {
        'import/no-unused-modules': ['off'],
        'import/no-commonjs': ['off'],

        // TODO: Remover
        'max-classes-per-file': ['off'],
    }
}
