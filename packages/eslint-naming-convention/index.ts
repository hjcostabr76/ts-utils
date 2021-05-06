import { ncMain } from './nc_main'
import { ncConfigT, nc_GeneralSettingsT, ncReportLevelT, ncRuleT, ncSettingsT } from './nc_types'

export const generateNamingConventions = ncMain
export {
    ncReportLevelT as ReportLevel,
    ncSettingsT as Settings,
    ncRuleT as Rule,
    nc_GeneralSettingsT as GeneralSettings,
    ncConfigT as Config,
}

export default ncMain
