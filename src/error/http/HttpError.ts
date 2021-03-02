import { HttpStatusEnum } from '@hjcostabr76/types'

/**
 * EXCECAO
 * Classe mae a ser extendida por classes que definem erros relacionados a
 * 01 codigo de erro http.
 */
export abstract class HttpError extends Error {

    name: string = HttpError.prototype.name // eslint-disable-line unicorn/custom-error-definition
    readonly status: HttpStatusEnum

    constructor(message: string, status: HttpStatusEnum) {
        super(message)
        this.status = status
    }
}
