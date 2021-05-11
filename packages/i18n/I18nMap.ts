import { LanguageEnum } from '@hjcostabr76/generics/enum'

import { I18n } from './I18n'

/**
 * DECORATOR (I18n)
 * Inclui 01 classe que implementa definicao de textos no controle do gerenciador de internacionalizacao da aplicacao.
 */
export function I18nMap<TextsT>(context: string, language: LanguageEnum): ClassDecorator { // eslint-disable-line @typescript-eslint/naming-convention
    return (target: any): void => {
        I18n.addTexts<TextsT>(context, language, new target())
    }
}
