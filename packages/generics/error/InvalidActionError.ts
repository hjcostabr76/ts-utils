import { HttpStatusMsgI18n } from '@system/http-status-i18n/HttpStatusMsgI18n'
import { I18n } from '@system/i18n/I18n'

/**
 * EXCECAO
 * Falha do tipo: Tentantiva de realizar acao invalida.
 */
export class InvalidActionError extends Error {

    readonly name = 'InvalidActionError'

    constructor(message?: string) {
        super(message ?? I18n.getText<HttpStatusMsgI18n>(HttpStatusMsgI18n.CONTEXT, 'unprocessableEntity'))
    }
}
