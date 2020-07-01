import { I18n } from '@hjcostabr76/I18n'
import { HttpStatusEnum } from '@hjcostabr76/types'

import { DefaultsCFG } from '../../config/DefaultsCFG'
import { HttpError } from './HttpError'
import { HttpStatusMsgI18n } from './i18n/HttpStatusMsgI18n'

/**
 * EXCECAO
 * Falha do tipo: Requisicao invalida.
 */
export class BadRequestError extends HttpError {

    readonly name: string

    constructor(message?: string, name?: string) {
        super(
            message ?? I18n.getText<HttpStatusMsgI18n>(HttpStatusMsgI18n.CONTEXT, 'badRequest', DefaultsCFG.language),
            HttpStatusEnum.BAD_REQUEST
        )
        this.name = name ?? BadRequestError.prototype.name // eslint-disable-line unicorn/custom-error-definition
    }
}
