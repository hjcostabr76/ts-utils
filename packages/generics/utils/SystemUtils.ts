import { InvalidArgsError } from '../error'
import { AnyObjT, ConstructorT, SequentialStepErrorConfigT, OrFunctionT, OrNullishT, OrUndefT, AnyFuncT } from '../type'

/**
 * UTILS
 * Reune funcoes utilitarias para uso geral.
 */
export const SystemUtils = {

    async sleep(time: number): Promise<void> { // eslint-disable-line @typescript-eslint/naming-convention
        await new Promise(resolve => setTimeout(() => resolve(true), time))
    },

    debug(...messages: any[]): void {
        /* eslint-disable no-console */
        console.log('\n\n')
        console.log(...messages)
        console.log('\n')
        /* eslint-enable no-console */
    },

    /**
     * Retorna 01 detrminado valore apenas se 01 condicao for verdadeira, caso contrario
     * retorna 01 valor padrao opcional (pode ser indefinido).
     */
    nvl<T = any>(condition: boolean, value: OrNullishT<OrFunctionT<T>>, defaultValue?: T): OrUndefT<T> { // eslint-disable-line @typescript-eslint/naming-convention

        const valueToReturn: OrNullishT<T> = condition
            ? ((typeof value === 'function') ? (value as AnyFuncT<T>)() : value)
            : undefined

        return valueToReturn ?? defaultValue
    },

    isNullish(value: any): boolean {
        return [null, undefined].includes(value) // eslint-disable-line unicorn/no-null
    },

    isEmpty(value: unknown): boolean {

        if (!value)
            return false

        return (
            (Array.isArray(value) && !!value.length)
            || (typeof value === 'object' && !!Object.values(value as AnyObjT).find(prop => !!prop))
        )
    },

    /**
     * Automatiza tratamento de excecao em locais em que ocorrem multiplas acoes
     * sequenciais e em que falhas em cada uma delas pode demandar 01 tratamento
     * diferente especifico.
     *
     * NOTE: Permite usar 01 unico bloco 'try -> catch' para tratar 1+ excecoes
     */
    throwSequentialStepsError<StepT>(
        steps: Array<SequentialStepErrorConfigT<StepT>>,
        concludedSteps: StepT[],
        error: unknown,
        defaultException: ConstructorT<Error> = InvalidArgsError,

    ): void {

        type ConcludedStepT = Array<StepT | 'default'>

        for (const step of steps) {

            if (step.name !== 'default' && (concludedSteps as ConcludedStepT).includes(step.name))
                continue

            const errMsg = step.errorMsg ?? 'Unexpected failure'
            if (step.errorHandler) {
                step.errorHandler(error, errMsg)
                continue
            }

            const exception = step.exception ?? defaultException
            throw new exception(errMsg, error)
        }

        throw error
    }
}
