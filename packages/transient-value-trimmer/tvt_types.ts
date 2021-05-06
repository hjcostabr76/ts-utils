/**
 * TYPE
 * Define formato para configurar geracao de 01 instancia do TransientValueTrimmer
 * (eliminador de valor transitorio) com entrada multipla de valores (array).
 *
 * @see TransientValueTrimmerConfigTP
 */
export type tvt_ArrayInputConfigT = {
    valuesToListenList?: number[],
    valuesToUseList?: number[],
}

/**
 * TYPE
 * Parametros de configuracao para TransientValueTrimmer (eliminador de valor transitorio).
 */
export type tvt_ConfigT<OutputT> = {
    delay: number,
    onFinish: (definitiveValue: OutputT) => void,
    isReversed?: boolean,
    arrayInputConfig?: tvt_ArrayInputConfigT,
    debugType?: tvt_DebugActiveT,
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
export type tvt_DebugActiveT = 'transient' | 'permanent'

/**
 * TYPE
 * Define tipos de debug possiveis para se utilizar numa instancia do TransientValueTrimmer:
 *
 * - transient: Emitir logs apenas de valores transitorios;
 * - permanent: Emitir logs apenas de valores permanentes;
 * - full: Emitir logs de todos os valores;
 * - disabled: NAO emitir logs;
 */
export type tvt_DebugT = tvt_DebugActiveT | 'full' | 'disabled'
