import * as fs from 'fs'

import { nc_ReportLevelT, nc_SettingsT, nc_RuleT } from './nc_types'
import { NC_getConfigs } from './nc_utils'

export function nc_main(reportLevel: nc_ReportLevelT, settings?: Exclude<nc_SettingsT, 'reportLevel' | 'filePath'>): Promise<nc_RuleT>
export function nc_main(reportLevel: nc_ReportLevelT, settings?: Exclude<nc_SettingsT, 'reportLevel'>): Promise<void>
export function nc_main(settings: nc_SettingsT): Promise<void>

export async function nc_main(param1: nc_ReportLevelT | nc_SettingsT, settings?: Partial<nc_SettingsT>): Promise<nc_RuleT | void> {

    settings = settings ?? (param1 as nc_SettingsT)
    const reportLevel: nc_ReportLevelT = (settings as nc_SettingsT)?.reportLevel ?? param1

    const rule: nc_RuleT = {
        '@typescript-eslint/naming-convention': [reportLevel, ...NC_getConfigs(settings)]
    }

    if (!settings?.filePath)
        return rule

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
