import { OrNullTP } from './OrNullTP'
import { OrUndefTP } from './OrUndefTP'

/**
 * TYPE
 * Tipo que pode ser de 01 determinado tipo OU nulo OU indefinido.
 */
export type OrNullishTP<T> = OrNullTP<OrUndefTP<T>>
