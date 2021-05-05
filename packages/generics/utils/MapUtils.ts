import { OrUndefTP } from '@hjcostabr/generics/type'

import { ArrayUtils } from './ArrayUtils'

type MapTP<MapValuesTP> = Map<string | number, MapValuesTP>

/**
 * UTILITARIOS para manipulacao de mapas.
 *
 * @see Map
 */
export const MapUtils = {

    /** Gera & retorna 01 vetor com todos os valores de 01 mapa. */
    getArray<MapValuesTP = any>(map: MapTP<MapValuesTP>): MapValuesTP[] {
        const valuesArray: MapValuesTP[] = []
        map.forEach(mapValue => valuesArray.push(mapValue))
        return valuesArray
    },

    /** Captura & retorna valor da 1a chave de 01 mapa. */
    getFirstValue<MapValuesTP = any>(map: MapTP<MapValuesTP>): OrUndefTP<MapValuesTP> {
        return MapUtils.getNthValue(map, 0)
    },

    /** Captura & retorna valor da ultima chave de 01 mapa. */
    getLastValue<MapValuesTP = any>(map: MapTP<MapValuesTP>): OrUndefTP<MapValuesTP> {
        const mapValuesArray = MapUtils.getArray(map)
        return mapValuesArray[ArrayUtils.getLastIndex(mapValuesArray)]
    },

    /** Captura & retorna valor n-esimo valor de 01 map. */
    getNthValue<MapValuesTP = any>(map: MapTP<MapValuesTP>, n: number): OrUndefTP<MapValuesTP> {
        return MapUtils.getArray(map)[n]
    },
}
