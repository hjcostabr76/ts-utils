import { ConstructorTP } from '@hjcostabr76/types'

/**
 * TYPE
 * Parametros para tratamento de 01 erro ocorrido durante 01 procedimento
 * divido em etapas sequenciais.
 *
 * @see SystemUtils
 */
export type ErrorHandlingConfigTP<StepsGTP> = {
    name: StepsGTP | 'default',
    errorMsg?: string,
    errorHandler?: (err: any, errMsg: string) => void,
    exception?: ConstructorTP<Error>,
}
