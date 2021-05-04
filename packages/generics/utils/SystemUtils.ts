import { InvalidArgsError } from '@system/error/InvalidArgsError'
import { AnyObjTP } from '@system/type/AnyObjTP'
import { ConstructorTP } from '@system/type/ConstructorTP'
import { ErrorHandlingConfigTP } from '@system/type/ErrorHandlingConfigTP'
import { OrFunctionTP } from '@system/type/OrFunction'
import { OrNullishTP } from '@system/type/OrNullishTP'
import { OrUndefTP } from '@system/type/OrUndefTP'

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
    nvl<T = any>(condition: boolean, value: OrNullishTP<OrFunctionTP<T>>, defaultValue?: T): OrUndefTP<T> { // eslint-disable-line @typescript-eslint/naming-convention
        let valueToReturn: OrNullishTP<T>
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
        defaultException: ConstructorTP<Error> = InvalidArgsError,

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
