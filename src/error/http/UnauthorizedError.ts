import { I18n } from '@hjcostabr76/I18n'
import { HttpStatusEnum } from '@hjcostabr76/types'

import { DefaultsCFG } from '../../config/DefaultsCFG'
import { HttpError } from './HttpError'
import { HttpStatusMsgI18n } from './i18n/HttpStatusMsgI18n'

/**
 * EXCECAO
 * Falha do tipo: Acesso MAO autorizado.
 */
export class UnauthorizedError extends HttpError {

    readonly name: string = UnauthorizedError.prototype.name // eslint-disable-line unicorn/custom-error-definition

    constructor(message?: string) {
        super(
            message ?? I18n.getText<HttpStatusMsgI18n>(HttpStatusMsgI18n.CONTEXT, 'unauthorized', DefaultsCFG.language),
            HttpStatusEnum.UNAUTHORIZED
        )
    }
}
