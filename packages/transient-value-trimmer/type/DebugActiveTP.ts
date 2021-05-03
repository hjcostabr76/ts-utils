/**
 * TYPE
 * Define tipos de debug 'ativos' para se utilizar numa instancia do TransientValueTrimmer:
 *
 * Tipos ativos sao os tipos que habilitam & especificam acoes de debug;
 * - transient: Emitir logs apenas de valores transitorios;
 * - permanent: Emitir logs apenas de valores permanentes;
 */
export type DebugActiveTP = 'transient' | 'permanent'
