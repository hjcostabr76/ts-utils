/**
 * TYPE
 * Tipo de alguma coisa que pode ser de 01 determinado tipo ou 01 funcao simples que retorne algo desse mesmo tipo.
 */
export type OrFunctionTP<T = any> = T | (() => T)
