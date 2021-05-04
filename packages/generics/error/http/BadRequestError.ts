import { HttpStatusEnum } from '@system/enum/HttpStatusEnum'
import { HttpError } from '@system/error/http/HttpError'
import { HttpStatusMsgI18n } from '@system/http-status-i18n/HttpStatusMsgI18n'
import { I18n } from '@system/i18n/I18n'

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
