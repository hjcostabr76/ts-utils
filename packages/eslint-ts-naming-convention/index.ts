import { ncMain } from './nc_main'
import { NCConfigT, NCGeneralSettingsT, NCReportLevelT, NCRuleT, NCSettingsT } from './nc_types'

/**
 * FIXME: 2021-06-15 - Sobrescrita nao esta funcionando
 */

export const generateNamingConventions = ncMain
export {
    NCReportLevelT as ReportLevel,
    NCSettingsT as Settings,
    NCRuleT as Rule,
    NCGeneralSettingsT as GeneralSettings,
    NCConfigT as Config,
}

export default ncMain
