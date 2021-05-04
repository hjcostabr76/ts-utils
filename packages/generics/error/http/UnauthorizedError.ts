import { HttpStatusEnum } from '@system/enum/HttpStatusEnum'
import { HttpError } from '@system/error/http/HttpError'
import { HttpStatusMsgI18n } from '@system/http-status-i18n/HttpStatusMsgI18n'
import { I18n } from '@system/i18n/I18n'

/**
 * EXCECAO
 * Falha do tipo: Acesso MAO autorizado.
 *
 * @author hjcostabr
 */
export class UnauthorizedError extends HttpError {

    readonly name = 'UnauthorizedError'

    constructor(message?: string) {
        super(message ?? I18n.getText<HttpStatusMsgI18n>(HttpStatusMsgI18n.CONTEXT, 'unauthorized'), HttpStatusEnum.UNAUTHORIZED)
    }
}
