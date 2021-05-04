import { ObjKeyTP } from '@system/type/ObjKeyTP'
import { OrUndefinedTP } from '@system/type/OrUndefinedTP'

type KeysTupleTP<Key1GTP extends ObjKeyTP = string, Key2GTP extends ObjKeyTP = Key1GTP> = [Key1GTP, Key2GTP]
type NestedMapTP<ValueGTP, Key1GTP extends ObjKeyTP = string, Key2GTP extends ObjKeyTP = Key1GTP> = Map<Key1GTP, NestedMapInnerTP<ValueGTP, Key2GTP>>
type NestedMapInnerTP<ValueGTP, Key2GTP extends ObjKeyTP> = Map<Key2GTP, ValueGTP | Set<ValueGTP>>

/**
 * MAPA ANINHADO
 *
 * Estrutura que permite organizacao de valores identificados por 01 combinacao de 02 chaves:
 * - Cada valor eh indexado pela combinacao unica de 02 chaves;
 * - Equivale a 01 mapa dentro de outro mapa;
 */
export class NestedMap<ValueTP, Key1TP extends ObjKeyTP = string, Key2TP extends ObjKeyTP = Key1TP> {   // eslint-disable-line @typescript-eslint/naming-convention

    private readonly nestedMap: NestedMapTP<ValueTP, Key1TP, Key2TP> = new Map()
    private readonly shouldConcatenate: boolean

    constructor(shouldConcatenate?: boolean) {
        this.shouldConcatenate = shouldConcatenate ?? false
    }

    has(key1: Key1TP, key2?: Key2TP): boolean {
        const aux = this.nestedMap.get(key1)
        return !key2 ? !!aux : !!aux?.get(key2)
    }

    get(key1: Key1TP, key2: Key2TP): OrUndefinedTP<ValueTP> {
        return this.getParsedValue(this.nestedMap.get(key1)?.get(key2))
    }

    set(key1: Key1TP, key2: Key2TP, value: ValueTP): NestedMap<ValueTP, Key1TP, Key2TP> {

        const innerMap: NestedMapInnerTP<ValueTP, Key2TP> = this.nestedMap.get(key1) ?? new Map()

        if (this.shouldConcatenate) {
            const currentValueSet: Set<ValueTP> = (innerMap.get(key2) as Set<ValueTP>) ?? new Set()
            currentValueSet.add(value)
            innerMap.set(key2, currentValueSet)

        } else
            innerMap.set(key2, value)

        this.nestedMap.set(key1, innerMap)
        return this
    }

    keys(): Array<KeysTupleTP<Key1TP, Key2TP>> { // eslint-disable-line @typescript-eslint/naming-convention

        const keysTuples: Array<KeysTupleTP<Key1TP, Key2TP>> = []

        for (const [key1, innerMap] of this.nestedMap.entries()) {
            const key2List = Array.from(innerMap.keys())
            keysTuples.push(...key2List.map<KeysTupleTP<Key1TP, Key2TP>>(key2 => [key1, key2]))
        }

        return keysTuples
    }

    values(): ValueTP[] { // eslint-disable-line @typescript-eslint/naming-convention
        const uniqueList: ValueTP[] = []
        for (const innerMap of this.nestedMap.values())
            uniqueList.push(...Array.from(innerMap.values(), value => this.getParsedValue(value)!))
        return uniqueList
    }

    private getParsedValue(value?: ValueTP | Set<ValueTP>): OrUndefinedTP<ValueTP> {
        return (this.shouldConcatenate ? Array.from(value as Set<ValueTP>) : value) as ValueTP
    }
}
