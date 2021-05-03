import { DebugActiveTP } from './DebugActiveTP'
import { ArrayInputConfigTP } from './ArrayInputConfigTP'

/**
 * TYPE
 * Parametros de configuracao para TransientValueTrimmer (eliminador de valor transitorio).
 */
export type ConfigTP<OutputTP> = {
    delay: number,
    onFinish: (definitiveValue: OutputTP) => void,
    isReversed?: boolean,
    arrayInputConfig?: ArrayInputConfigTP,
    debugType?: DebugActiveTP,
    debugName?: string,
}
