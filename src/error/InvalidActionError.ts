/**
 * EXCECAO
 * Falha do tipo: Tentantiva de realizar acao invalida.
 */
export class InvalidActionError extends Error {

    readonly name: string = InvalidActionError.prototype.name // eslint-disable-line unicorn/custom-error-definition

    constructor(message?: string) {
        super(message ?? 'Watch out! Wrong time and/or wrong place to do something you were not supposed to...')
    }
}
