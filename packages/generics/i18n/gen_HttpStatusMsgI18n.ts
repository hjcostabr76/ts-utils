import { LanguageEnum } from '@hjcostabr76/generics/enum'
import { I18nMap } from '@hjcostabr76/i18n'

/**
 * LABELS
 * Determina referencia para mensagens de retorno da aplicacao.
 */
export class gen_HttpStatusMsgI18n {

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
 */
@I18nMap(gen_HttpStatusMsgI18n.CONTEXT, LanguageEnum.PT_BR)
export class gen_HttpStatusMsgI18nPtBr extends gen_HttpStatusMsgI18n {
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
