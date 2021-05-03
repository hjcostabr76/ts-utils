import * as fs from 'fs'

import { ReportLevelTP, SettingsTP, RuleTP } from './types'
import { getConfigs } from './utils'

export function main(reportLevel: ReportLevelTP, settings?: Exclude<SettingsTP, 'reportLevel' | 'filePath'>): Promise<RuleTP>
export function main(reportLevel: ReportLevelTP, settings?: Exclude<SettingsTP, 'reportLevel'>): Promise<void>
export function main(settings: SettingsTP): Promise<void>

export async function main(param1: ReportLevelTP | SettingsTP, settings?: Partial<SettingsTP>): Promise<RuleTP | void> {

    settings = settings ?? (param1 as SettingsTP)
    const reportLevel: ReportLevelTP = (settings as SettingsTP)?.reportLevel ?? param1

    const rule: RuleTP = {
        '@typescript-eslint/naming-convention': [reportLevel, ...getConfigs(settings)]
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
