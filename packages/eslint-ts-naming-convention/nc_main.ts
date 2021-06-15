import fs from 'fs'

import { NCReportLevelT, NCSettingsT, NCRuleT } from './nc_types'
import { ncGetConfigs } from './nc_utils'

/* eslint-disable @typescript-eslint/naming-convention */
export function ncMain(reportLevel: NCReportLevelT, settings?: Exclude<NCSettingsT, 'reportLevel' | 'filePath'>): Promise<NCRuleT>
export function ncMain(reportLevel: NCReportLevelT, settings?: Exclude<NCSettingsT, 'reportLevel'>): Promise<void>
export function ncMain(settings: NCSettingsT): Promise<void>

export async function ncMain(param1: NCReportLevelT | NCSettingsT, settings?: Partial<NCSettingsT>): Promise<NCRuleT | void> {
/* eslint-enable @typescript-eslint/naming-convention */

    // Identifica parametros
    settings = settings ?? (param1 as NCSettingsT)
    const reportLevel: NCReportLevelT = (settings as NCSettingsT)?.reportLevel ?? param1

    // Gera config
    const rule: NCRuleT = {
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
