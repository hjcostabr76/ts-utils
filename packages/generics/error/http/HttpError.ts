import { HttpStatusEnum } from '@hjcostabr76/generics/enum'

/**
 * EXCECAO
 * Classe mae a ser extendida por classes que definem erros relacionados a 01 codigo de erro http.
 */
export abstract class HttpError extends Error {

    name = 'HttpError'
    readonly status: HttpStatusEnum

    constructor(message: string, status: HttpStatusEnum) {
        super(message)
        this.status = status
    }
}
