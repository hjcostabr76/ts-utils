module.exports = { // eslint-disable-line import/no-commonjs
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    extends: [
        'hjcostabr76'
    ],
    // ignorePatterns: ['generate-naming-convention.ts']
    rules: {
        'import/no-unused-modules': ['warn', {
            // missingExports: true,    // nao funciona (acusa falso positivo)
            unusedExports: true,
            src: ['packages/**/**/*.ts'],
        }],
    }
}
