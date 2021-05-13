import { ncMain } from './ncMain'
import { ncConfigT, ncGeneralSettingsT, ncReportLevelT, ncRuleT, ncSettingsT } from './ncTypes'

export const generateNamingConventions = ncMain
export {
    ncReportLevelT as ReportLevel,
    ncSettingsT as Settings,
    ncRuleT as Rule,
    ncGeneralSettingsT as GeneralSettings,
    ncConfigT as Config,
}

export default ncMain
