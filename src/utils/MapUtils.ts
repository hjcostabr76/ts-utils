import { OrUndefTP } from '@hjcostabr76/types'

import { ArrayUtils } from './ArrayUtils'

type MapTP<MapValuesGTP> = Map<string | number, MapValuesGTP>

/**
 * UTILITARIOS para manipulacao de mapas.
 * @see Map
 */
export const MapUtils = {

    /** Gera & retorna 01 vetor com todos os valores de 01 mapa. */
    getArray<MapValuesGTP = any>(map: MapTP<MapValuesGTP>): MapValuesGTP[] {
        const valuesArray: MapValuesGTP[] = []
        map.forEach(mapValue => valuesArray.push(mapValue))
        return valuesArray
    },

    /** Captura & retorna valor da 1a chave de 01 mapa. */
    getFirstValue<MapValuesGTP = any>(map: MapTP<MapValuesGTP>): OrUndefTP<MapValuesGTP> {
        return MapUtils.getNthValue(map, 0)
    },

    /** Captura & retorna valor da ultima chave de 01 mapa. */
    getLastValue<MapValuesGTP = any>(map: MapTP<MapValuesGTP>): OrUndefTP<MapValuesGTP> {
        const mapValuesArray = MapUtils.getArray(map)
        return mapValuesArray[ArrayUtils.getLastIndex(mapValuesArray)]
    },

    /** Captura & retorna valor n-esimo valor de 01 map. */
    getNthValue<MapValuesGTP = any>(map: MapTP<MapValuesGTP>, n: number): OrUndefTP<MapValuesGTP> {
        return MapUtils.getArray(map)[n]
    },
}
