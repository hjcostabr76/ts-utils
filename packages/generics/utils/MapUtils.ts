import { OrUndefT } from '../type'

import { ArrayUtils } from './ArrayUtils'

type MapT<T> = Map<string | number, T>

/**
 * UTILITARIOS para manipulacao de mapas.
 * @see Map
 */
export const MapUtils = {

    /** Gera & retorna 01 vetor com todos os valores de 01 mapa. */
    getArray<T = any>(map: MapT<T>): T[] {
        const valuesArray: T[] = []
        map.forEach(mapValue => valuesArray.push(mapValue))
        return valuesArray
    },

    /** Captura & retorna valor da 1a chave de 01 mapa. */
    getFirstValue<T = any>(map: MapT<T>): OrUndefT<T> {
        return MapUtils.getNthValue(map, 0)
    },

    /** Captura & retorna valor da ultima chave de 01 mapa. */
    getLastValue<T = any>(map: MapT<T>): OrUndefT<T> {
        const mapValuesArray = MapUtils.getArray(map)
        return mapValuesArray[ArrayUtils.getLastIndex(mapValuesArray)]
    },

    /** Captura & retorna valor n-esimo valor de 01 map. */
    getNthValue<T = any>(map: MapT<T>, n: number): OrUndefT<T> {
        return MapUtils.getArray(map)[n]
    },
}
