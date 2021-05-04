import { LanguageEnum } from '@system/enum/LanguageEnum'
import { I18nMap } from '@system/i18n/I18nMap'
import { ValidationRulesErrMsgI18n } from '@system/validation/error-message/ValidationRulesErrMsgTP'

/**
 * VALIDACAO
 * Mensagens de erro para regras customizadas no idioma
 * pt-BR.
 */
@I18nMap(ValidationRulesErrMsgI18n.CONTEXT, LanguageEnum.PT_BR)
export class ValidationRulesErrMsgPtBr extends ValidationRulesErrMsgI18n { // eslint-disable-line @typescript-eslint/naming-convention
    readonly isRequired: string = 'Campo obrigatório'
    readonly isString: string = 'Campo deve ser do tipo texto'
    readonly isEmail: string = 'e-mail inválido'
    readonly hasNoSpace: string = 'Campo não deve conter espaços'
    readonly minLength: string = 'Deve ter comprimento mínimo #'
}
