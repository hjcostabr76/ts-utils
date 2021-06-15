import eslintNamingConventions, { Settings } from 'eslint-ts-naming-convention'

const settings: Settings = {
    reportLevel: 'error',
    filePath: '../../.eslint-ts-naming-convention',
}

/* eslint-disable no-console */
console.log('Gerando configurações...')

eslintNamingConventions(settings)
    .then(() => console.log('\nConfigurações geradas com sucesso!'))
    .catch(err => console.error('Falha: ', err))
/* eslint-enable no-console */
