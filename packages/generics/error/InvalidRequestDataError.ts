import { BadRequestError } from '@system/error/http/BadRequestError'

/**
 * EXCECAO
 * Falha por passagem invalida de parametros.
 *
 * @author hjcostabr
 */
export class InvalidRequestDataError extends BadRequestError {

    readonly data?: unknown

    constructor(message?: string, data?: unknown)
    constructor(data: unknown)

    constructor(param1: unknown, data?: unknown) {
        super((typeof param1 === 'string') ? param1 : 'Dados de entrada nao passaram na validacao', 'InvalidRequestDataError')
        this.data = data ?? param1
    }
}
