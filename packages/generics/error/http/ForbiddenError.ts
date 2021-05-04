import { HttpStatusEnum } from '@system/enum/HttpStatusEnum'
import { HttpError } from '@system/error/http/HttpError'
import { HttpStatusMsgI18n } from '@system/http-status-i18n/HttpStatusMsgI18n'
import { I18n } from '@system/i18n/I18n'

/**
 * EXCECAO
 * Falha do tipo: Acesso NAO permitido.
 *
 * @author hjcostabr
 */
export class ForbiddenError extends HttpError {

    readonly name = 'ForbiddenError'

    constructor(message?: string) {
        super(message ?? I18n.getText<HttpStatusMsgI18n>(HttpStatusMsgI18n.CONTEXT, 'forbidden'), HttpStatusEnum.FORBIDDEN)
    }
}
