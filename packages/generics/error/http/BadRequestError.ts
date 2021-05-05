import { I18n } from '@hjcostabr76/I18n'
import { HttpStatusEnum } from '@hjcostabr76/generics/enum'

import { HttpError } from './HttpError'

import { HttpStatusMsgI18n } from './i18n/HttpStatusMsgI18n'

/**
 * EXCECAO
 * Falha do tipo: Requisicao invalida.
 */
export class BadRequestError extends HttpError {

    readonly name: string

    constructor(message?: string, name?: string) {
        super(message ?? I18n.getText<HttpStatusMsgI18n>(HttpStatusMsgI18n.CONTEXT, 'badRequest'), HttpStatusEnum.BAD_REQUEST)
        this.name = name ?? 'BadRequestError' // eslint-disable-line unicorn/custom-error-definition
    }
}
