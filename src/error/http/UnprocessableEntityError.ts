import { I18n } from '@hjcostabr/I18n'

import { HttpStatusEnum } from '@hjcostabr76/types'

import { DefaultsCFG } from '../../config/DefaultsCFG'
import { HttpError } from './HttpError'
import { HttpStatusMsgI18n } from './i18n/HttpStatusMsgI18n'

/**
 * EXCECAO
 * Falha do tipo: Acao invalida.
 */
export class UnprocessableEntityError extends HttpError {

    readonly name: string = UnprocessableEntityError.prototype.name // eslint-disable-line unicorn/custom-error-definition

    constructor(message?: string) {
        super(
            message ?? I18n.getText<HttpStatusMsgI18n>(HttpStatusMsgI18n.CONTEXT, 'unprocessableEntity', DefaultsCFG.language),
            HttpStatusEnum.UNPROCESSABLE_ENTITY
        )
    }
}
