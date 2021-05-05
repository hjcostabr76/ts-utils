import { I18n } from '@hjcostabr76/I18n'

import { HttpStatusMsgI18n } from './i18n/HttpStatusMsgI18n'

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
