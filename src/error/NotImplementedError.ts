/**
 * EXCECAO
 * Falha do tipo: Metodo/funcionalidade ainda nao implementada.
 */
export class NotImplementedError extends Error {

    readonly name: string = NotImplementedError.prototype.name // eslint-disable-line unicorn/custom-error-definition

    constructor(message?: string) {
        super(message ?? 'Feature not implemented so far')
    }
}
