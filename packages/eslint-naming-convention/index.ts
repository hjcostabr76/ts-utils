import { ncMain } from './ncMain'
import { ncConfigT, nc_GeneralSettingsT, ncReportLevelT, ncRuleT, ncSettingsT } from './ncTypes'

export const generateNamingConventions = ncMain
export {
    ncReportLevelT as ReportLevel,
    ncSettingsT as Settings,
    ncRuleT as Rule,
    nc_GeneralSettingsT as GeneralSettings,
    ncConfigT as Config,
}

export default ncMain
