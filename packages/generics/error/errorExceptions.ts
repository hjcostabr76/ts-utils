import { HttpStatusEnum } from '../enum'
import { HttpStatusMsgEnUS } from './HttpStatusMsg'

/**
 * EXCECAO
 * Classe mae a ser extendida por classes que definem erros relacionados a 01 codigo de erro http.
 */
abstract class HttpError extends Error {

    name = 'HttpError'
    readonly status: HttpStatusEnum

    constructor(message: string, status: HttpStatusEnum) {
        super(message)
        this.status = status
    }
}

/* eslint-disable unicorn/custom-error-definition */

/**
 * EXCECAO
 * Falha do tipo: Requisicao invalida.
 */
export class BadRequestError extends HttpError {

    readonly name: string

    constructor(message?: string, name?: string) {
        super(message ?? HttpStatusMsgEnUS.badRequest, HttpStatusEnum.BAD_REQUEST)
        this.name = name ?? 'BadRequestError'
    }
}

/**
 * EXCECAO
 * Falha do tipo: Acesso NAO permitido.
 */
export class ForbiddenError extends HttpError {

    readonly name = 'ForbiddenError'

    constructor(message?: string) {
        super(message ?? HttpStatusMsgEnUS.forbidden, HttpStatusEnum.FORBIDDEN)
    }
}

/**
 * EXCECAO
 * Falha do tipo: Acesso MAO autorizado.
 */
export class UnauthorizedError extends HttpError {

    readonly name = 'UnauthorizedError'

    constructor(message?: string) {
        super(message ?? HttpStatusMsgEnUS.unauthorized, HttpStatusEnum.UNAUTHORIZED)
    }
}

/**
 * EXCECAO
 * Falha do tipo: Metodo/funcionalidade ainda nao implementada.
 */
export class NotImplementedError extends Error {

    readonly name: string = 'NotImplementedError'

    constructor(message?: string) {
        super(message ?? 'Funcionalidade nao implementada ate o momento')
    }
}

/**
 * EXCECAO
 * Falha por passagem invalida de parametros.
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

/**
 * EXCECAO
 * Falha do tipo: Tentantiva de realizar acao invalida.
 */
export class InvalidActionError extends Error {

    readonly name = 'InvalidActionError'

    constructor(message?: string) {
        super(message ?? HttpStatusMsgEnUS.unprocessableEntity)
    }
}

/**
 * EXCECAO
 * Falha por passagem invalida de parametros.
 */
export class InvalidArgsError extends Error {

    readonly name = 'InvalidArgsError'
    readonly data?: unknown

    constructor(message?: string, data?: unknown)
    constructor(data: unknown)

    constructor(param1: unknown, data?: unknown) {
        super((typeof param1 === 'string') ? param1 : 'Dados de entrada invalidos')
        this.data = data ?? param1
    }
}

/* eslint-enable unicorn/custom-error-definition */
