import { LanguageEnum } from '@system/enum/LanguageEnum'
import { I18n } from '@system/i18n/I18n'

/**
 * DECORATOR (I18n)
 * Inclui 01 classe que implementa definicao de textos no controle do gerenciador de internacionalizacao da aplicacao.
 */
export function I18nMap<TextsGTP>(context: string, language: LanguageEnum): ClassDecorator { // eslint-disable-line @typescript-eslint/naming-convention
    return (target: any): void => {
        I18n.addTexts<TextsGTP>(context, language, new target())
    }
}
