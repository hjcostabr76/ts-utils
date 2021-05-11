/**
 * TYPE
 * Define formato para configurar geracao de 01 instancia do TransientValueTrimmer
 * (eliminador de valor transitorio) com entrada multipla de valores (array).
 *
 * @see TransientValueTrimmerConfigT
 */
export type tvtArrayInputConfigT = {
    valuesToListen?: number[],
    valuesToUse?: number[],
}

/**
 * TYPE
 * Parametros de configuracao para TransientValueTrimmer (eliminador de valor transitorio).
 */
export type tvtConfigT<OutputT> = {
    delay: number,
    onFinish: (definitiveValue: OutputT) => void,
    isReversed?: boolean,
    arrayInputConfig?: tvtArrayInputConfigT,
    debugType?: tvtDebugActiveT,
    debugName?: string,
}

/**
 * TYPE
 * Define tipos de debug 'ativos' para se utilizar numa instancia do TransientValueTrimmer:
 *
 * Tipos ativos sao os tipos que habilitam & especificam acoes de debug;
 * - transient: Emitir logs apenas de valores transitorios;
 * - permanent: Emitir logs apenas de valores permanentes;
 */
export type tvtDebugActiveT = 'transient' | 'permanent'

/**
 * TYPE
 * Define tipos de debug possiveis para se utilizar numa instancia do TransientValueTrimmer:
 *
 * - transient: Emitir logs apenas de valores transitorios;
 * - permanent: Emitir logs apenas de valores permanentes;
 * - full: Emitir logs de todos os valores;
 * - disabled: NAO emitir logs;
 */
export type tvtDebugT = tvtDebugActiveT | 'full' | 'disabled'
