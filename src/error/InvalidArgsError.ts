/**
 * EXCECAO
 * Falha por passagem invalida de parametros.
 */
export class InvalidArgsError extends Error {

    readonly name: string = InvalidArgsError.prototype.name
    readonly data?: unknown

    constructor(message?: string, data?: unknown)
    constructor(data: unknown)

    constructor(param1: unknown, data?: unknown) {
        super((typeof param1 === 'string') ? param1 : 'Invalid parameters passed')
        this.data = data ?? param1
    }
}
