import { I18nMap } from '@hjcostabr76/i18n'

import { LanguageEnum } from '../enum'

/**
 * LABELS
 * Determina referencia para mensagens de erro utilizados pelas regras de validacao customizadas.
 *
 * TODO: 2021-05-07 - Possibilitar de fato a internacionalizacao
 */
export class ValidationMsg {

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
 *
 * FIXME: 2021-05-07 - Isso aqui nao vai funcionar...
 */
@I18nMap(ValidationMsg.CONTEXT, LanguageEnum.PT_BR)
/* export  */class ValidationMsgPtBr extends ValidationMsg {
    readonly isRequired: string = 'Campo obrigatório'
    readonly isString: string = 'Campo deve ser do tipo texto'
    readonly isEmail: string = 'e-mail inválido'
    readonly hasNoSpace: string = 'Campo não deve conter espaços'
    readonly minLength: string = 'Deve ter comprimento mínimo #'
}
