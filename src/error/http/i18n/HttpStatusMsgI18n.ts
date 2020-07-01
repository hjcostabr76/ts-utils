/**
 * LABELS
 * Determina referencia para mensagens de retorno da aplicacao.
 */
export class HttpStatusMsgI18n {

    static readonly CONTEXT = 'RETURN_MSG_CONTEXT'

    readonly ok!: string
    readonly created!: string
    readonly noContent!: string
    readonly badRequest!: string
    readonly unauthorized!: string
    readonly forbidden!: string
    readonly notFound!: string
    readonly methodNotAllowed!: string
    readonly conflict!: string
    readonly unprocessableEntity!: string
    readonly internalError!: string
}
