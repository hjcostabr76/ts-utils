import { LanguageEnum, TimezoneEnum } from '@hjcostabr76/types'

/**
 * CONFIG: Default values to parameterize utils functions.
 */
export class DefaultsCFG {

    private static _language: LanguageEnum.PT_BR
    private static _timezone: TimezoneEnum.AMERICA_SAO_PAULO

    static setLanguage(language: LanguageEnum): void {
        this._language = language
    }

    static setTimezone(timezone: TimezoneEnum): void {
        this._timezone = timezone
    }

    static get language(): LanguageEnum {
        return this._language
    }

    static get timezone(): TimezoneEnum {
        return this._timezone
    }
}
