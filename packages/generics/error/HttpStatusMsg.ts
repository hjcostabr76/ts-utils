/**
 * LABELS
 * Determina referencia para mensagens de retorno da aplicacao.
 */
export type HttpStatusMsgT = {
    ok: string,
    created: string,
    noContent: string,
    badRequest: string,
    unauthorized: string,
    forbidden: string,
    notFound: string,
    methodNotAllowed: string,
    conflict: string,
    unprocessableEntity: string,
    internalError: string,
}

/**
 * MENSAGENS de RETORNO: en-US.
 * Define textos para mensagens de retorno padrao da aplicacao.
 */
export const HttpStatusMsgEnUS: HttpStatusMsgT = {
    ok: 'OK',
    created: 'New register(s) created',
    noContent: 'Nothing to return',
    badRequest: 'Failure caused by missing or invalid input',
    unauthorized: 'Access not authorized',
    forbidden: 'Access not allowed',
    notFound: 'Requested resource not found',
    methodNotAllowed: 'HTTP method not allowed for this request',
    conflict: 'Conflict',
    unprocessableEntity: 'Invalid action attempt',
    internalError: 'Unexpected failure',
}
