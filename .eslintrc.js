module.exports = {
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    extends: [
        'hjcostabr76/ts-package',
        'hjcostabr76/spellcheck',
        './.eslint-naming-convention.js'
    ],
    ignorePatterns: ['generate-naming-convention.ts']
}
