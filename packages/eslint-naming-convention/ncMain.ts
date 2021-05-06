import * as fs from 'fs'

import { ncReportLevelT, ncSettingsT, ncRuleT } from './ncTypes'
import { ncGetConfigs } from './ncUtils'

export function ncMain(reportLevel: ncReportLevelT, settings?: Exclude<ncSettingsT, 'reportLevel' | 'filePath'>): Promise<ncRuleT>
export function ncMain(reportLevel: ncReportLevelT, settings?: Exclude<ncSettingsT, 'reportLevel'>): Promise<void>
export function ncMain(settings: ncSettingsT): Promise<void>

export async function ncMain(param1: ncReportLevelT | ncSettingsT, settings?: Partial<ncSettingsT>): Promise<ncRuleT | void> {

    // Identifica parametros
    settings = settings ?? (param1 as ncSettingsT)
    const reportLevel: ncReportLevelT = (settings as ncSettingsT)?.reportLevel ?? param1

    // Gera config
    const rule: ncRuleT = {
        '@typescript-eslint/naming-convention': [reportLevel, ...ncGetConfigs(settings)] // eslint-disable-line @typescript-eslint/naming-convention
    }

    if (!settings?.filePath) // Se nenhum arquivo for especificado retorna JSON programaticamente
        return rule

    // Gera arquivo
    const ruleAsString = JSON.stringify(rule, undefined, 4)
    settings.filePath = `${settings.filePath}.js`.replace(/(\.js)+$/, '$1')

    const fileContent = `
/**
 * ESLint: Typescript
 * -- Naming-convention rule definition --
 *
 * NOTE: This file is generated
 */
module.exports = {
    rules: ${ruleAsString},
};
        `

    await fs.promises.writeFile(settings.filePath, fileContent, { encoding: 'utf8' })
}
