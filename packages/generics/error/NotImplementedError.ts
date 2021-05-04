/**
 * EXCECAO
 * Falha do tipo: Metodo/funcionalidade ainda nao implementada.
 *
 * @author hjcostabr
 */
export class NotImplementedError extends Error {

    readonly name: string = 'NotImplementedError'

    constructor(message?: string) {
        super(message ?? 'Funcionalidade nao implementada ate o momento')
    }
}
