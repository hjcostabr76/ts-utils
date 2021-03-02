import { BadRequestError } from './http/BadRequestError'

/**
 * EXCECAO
 * Falha por passagem invalida de parametros.
 */
export class InvalidRequestDataError extends BadRequestError {

    readonly data?: unknown

    constructor(message?: string, data?: unknown)
    constructor(data: unknown)

    constructor(param1: unknown, data?: unknown) {
        super((typeof param1 === 'string') ? param1 : 'Input data didn\'t pass validation', InvalidRequestDataError.prototype.name)
        this.data = data ?? param1
    }
}
