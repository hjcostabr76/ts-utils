import { I18n } from '@hjcostabr76/I18n'
import { HttpStatusEnum } from '@hjcostabr76/generics/enum'

import { gen_HttpStatusMsgI18n } from './i18n/gen_HttpStatusMsgI18n'

/* =================================================================== */
/* -- ERROS HTTP ----------------------------------------------------- */
/* =================================================================== */

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

/**
 * EXCECAO
 * Falha do tipo: Requisicao invalida.
 */
export class BadRequestError extends HttpError {

    readonly name: string

    constructor(message?: string, name?: string) {
        super(message ?? I18n.getText<gen_HttpStatusMsgI18n>(gen_HttpStatusMsgI18n.CONTEXT, 'badRequest'), HttpStatusEnum.BAD_REQUEST)
        this.name = name ?? 'BadRequestError' // eslint-disable-line unicorn/custom-error-definition
    }
}

/**
 * EXCECAO
 * Falha do tipo: Acesso NAO permitido.
 */
export class ForbiddenError extends HttpError {

    readonly name = 'ForbiddenError'

    constructor(message?: string) {
        super(message ?? I18n.getText<gen_HttpStatusMsgI18n>(gen_HttpStatusMsgI18n.CONTEXT, 'forbidden'), HttpStatusEnum.FORBIDDEN)
    }
}

/**
 * EXCECAO
 * Falha do tipo: Acesso MAO autorizado.
 */
export class UnauthorizedError extends HttpError {

    readonly name = 'UnauthorizedError'

    constructor(message?: string) {
        super(message ?? I18n.getText<gen_HttpStatusMsgI18n>(gen_HttpStatusMsgI18n.CONTEXT, 'unauthorized'), HttpStatusEnum.UNAUTHORIZED)
    }
}

/* =================================================================== */
/* -- ERROS Customizados --------------------------------------------- */
/* =================================================================== */

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
        super(message ?? I18n.getText<gen_HttpStatusMsgI18n>(gen_HttpStatusMsgI18n.CONTEXT, 'unprocessableEntity'))
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
