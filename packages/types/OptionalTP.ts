import { OrUndefTP } from './OrUndefTP'

/**
 * TYPE
 * Tipo auxiliar para determinar dinamicamente se 01 valor de 01 determinado tipo
 * sera opcional ou nao.
 */
export type OptionalTP<T, IsOptional extends boolean> = IsOptional extends true ? OrUndefTP<T> : T
