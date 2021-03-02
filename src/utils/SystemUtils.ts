import { AnyObjTP, ConstructorTP, OrFunctionTP, OrNullishTP, OrUndefTP, TotalWithFlagTP } from '@hjcostabr76/types'

import { ErrorHandlingConfigTP } from '../type/ErrorHandlingConfigTP'

/**
 * UTILS
 * Reune funcoes utilitarias para uso geral.
 */
export const SystemUtils = {

    async sleep(time: number): Promise<void> { // eslint-disable-line @typescript-eslint/naming-convention
        await new Promise(resolve => setTimeout(() => resolve(), time))
    },

    debug(...messages: any[]): void { // eslint-disable-line @typescript-eslint/naming-convention
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
    nvl<TypeGTP = any>(condition: boolean, value: OrNullishTP<OrFunctionTP<TypeGTP>>, defaultValue?: TypeGTP): OrUndefTP<TypeGTP> { // eslint-disable-line @typescript-eslint/naming-convention
        let valueToReturn: OrNullishTP<TypeGTP>
        if (condition)
            valueToReturn = (typeof value === 'function') ? (value as Function)() : value
        return valueToReturn ?? defaultValue
    },

    isNullish(value: any): boolean {
        return [null, undefined].includes(value)    // eslint-disable-line unicorn/no-null
    },

    isEmpty(value: unknown): boolean {

        if (!value)
            return false

        return (
            (Array.isArray(value) && !!value.length)
            || (typeof value === 'object' && !!Object.values(value as AnyObjTP).find(prop => !!prop))
        )
    },

    /**
     * Retorna 01 contagem + 01 flag setado caso o total seja 0:
     * Incrementa o total se o flag for verdadeiro. Decrementa, caso contrario;
     */
    getTotalWithTrueOnZero(currentCount: number, isTrue: boolean): TotalWithFlagTP {
        const total = currentCount + (isTrue ? 1 : -1)
        return { total, isTrue: total > 0 }
    },

    /**
     * Automatiza tratamento de excecao em locais em que ocorrem multiplas acoes
     * sequenciais e em que falhas em cada uma delas pode demandar 01 tratamento
     * diferente especifico.
     *
     * NOTE: Permite usar 01 unico bloco 'try -> catch' para tratar 1+ excecoes
     */
    throwSequentialStepsError<StepsGTP>(
        steps: Array<ErrorHandlingConfigTP<StepsGTP>>,
        concludedSteps: StepsGTP[],
        error: unknown,
        defaultException: ConstructorTP<Error> = Error,

    ): void {

        type ConcludedStepsTP = Array<StepsGTP | 'default'>

        for (const step of steps) {

            if (step.name !== 'default' && (concludedSteps as ConcludedStepsTP).includes(step.name))
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
