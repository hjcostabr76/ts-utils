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
