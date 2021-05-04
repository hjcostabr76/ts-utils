/**
 * TYPE
 * Tipo de algo que deve ser 01 objeto mas do qual nao se sabe quais serao suas props ou os tipos dessas props.
 *
 * NOTE: Substitui o uso de '{}' que, na verdade equivale a 'qualquer valor nao anulavel'
 */
export type AnyObjTP = Record<string, unknown>
