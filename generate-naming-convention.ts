const eslintNamingConventions = require('eslint-ts-naming-convention')

/**
 * ESLINT: Config
 * Gerador de configuracao de regras de lint para padroes de nomenclatura.
 */
eslintNamingConventions.default({
    reportLevel: 'error',
    filePath: '.eslint-naming-convention.js',
    general: {
        classSuffixes: [
            'Helper',
            'Utils',
            'Error',
            'CFG',
            'I18n',
        ]
    }
})
    .then(() => {
        console.log('Arquivo gerado com sucesso!')
        process.exit(0)
    })
    .catch((err: unknown) => {
        console.error('FALHA ao tentar gerar arquivo: ', err)
        process.exit(1)
    })