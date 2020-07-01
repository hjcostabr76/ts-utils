import { I18nMap } from '@hjcostabr76/i18n'
import { LanguageEnum } from '@hjcostabr76/types'

import { HttpStatusMsgI18n } from './HttpStatusMsgI18n'

/**
 * MENSAGENS de RETORNO: pt-BR.
 * Define textos para mensagens de retorno padrao da aplicacao.
 */
@I18nMap(HttpStatusMsgI18n.CONTEXT, LanguageEnum.PT_BR)
export class HttpStatusMsgPtBrI18n extends HttpStatusMsgI18n {
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
