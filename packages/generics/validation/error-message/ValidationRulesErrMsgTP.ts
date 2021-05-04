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
