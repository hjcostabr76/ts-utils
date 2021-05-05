import { LanguageEnum } from '@hjcostabr76/generics/enum'
import { I18nMap } from '@hjcostabr76/i18n'

/**
 * LABELS
 * Determina referencia para mensagens de erro utilizados
 * pelas regras de validacao customizadas.
 */
export class ValidationRulesErrMsgI18n {

    static readonly CONTEXT = 'VALIDATION_ERR_MSG'

    readonly isRequired!: string
    readonly isEmail!: string
    readonly isString!: string
    readonly hasNoSpace!: string
    readonly minLength!: string
}

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
