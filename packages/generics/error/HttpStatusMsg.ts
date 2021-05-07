import { I18nMap } from '@hjcostabr76/i18n'

import { LanguageEnum } from '../enum'

/**
 * LABELS
 * Determina referencia para mensagens de retorno da aplicacao.
 *
 * TODO: 2021-05-07 - Possibilitar de fato a internacionalizacao
 */
export class HttpStatusMsg {

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

/**
 * MENSAGENS de RETORNO: pt-BR.
 * Define textos para mensagens de retorno padrao da aplicacao.
 *
 * FIXME: 2021-05-07 - Isso aqui nao vai funcionar
 */
@I18nMap(HttpStatusMsg.CONTEXT, LanguageEnum.PT_BR)
/* export  */class GenHttpStatusMsgI18nPtBr extends HttpStatusMsg {
    readonly ok = 'OK'
    readonly created = 'Novo(s) registro(s) criado(s)'
    readonly noContent = 'Nada a retornar'
    readonly badRequest = 'Falha por por dados/parâmetros inválidos'
    readonly unauthorized = 'Acesso não autorizado'
    readonly forbidden = 'Acesso não permitido'
    readonly notFound = 'Recurso não encontrado'
    readonly methodNotAllowed = 'Método http inválido para esta ação'
    readonly conflict = 'Conflito'
    readonly unprocessableEntity = 'Tentativa de realizar acao invalida'
    readonly internalError = 'Falha inesperada. Tente novamente em instantes'
}