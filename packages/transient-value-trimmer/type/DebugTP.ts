import { DebugActiveTP } from './DebugActiveTP'

/**
 * TYPE
 * Define tipos de debug possiveis para se utilizar numa instancia do TransientValueTrimmer:
 *
 * - transient: Emitir logs apenas de valores transitorios;
 * - permanent: Emitir logs apenas de valores permanentes;
 * - full: Emitir logs de todos os valores;
 * - disabled: NAO emitir logs;
 */
export type DebugTP = DebugActiveTP | 'full' | 'disabled'
