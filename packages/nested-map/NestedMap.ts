import { ObjKeyT, OrUndefT } from '@hjcostabr76/generics/type'

type KeysTupleT<Key1T extends ObjKeyT = string, Key2T extends ObjKeyT = Key1T> = [Key1T, Key2T]
type NestedMapT<ValueT, Key1T extends ObjKeyT = string, Key2T extends ObjKeyT = Key1T> = Map<Key1T, NestedMapInnerT<ValueT, Key2T>>
type NestedMapInnerT<ValueT, Key2T extends ObjKeyT> = Map<Key2T, ValueT | Set<ValueT>>

/**
 * MAPA ANINHADO
 *
 * Estrutura que permite organizacao de valores identificados por 01 combinacao de 02 chaves:
 * - Cada valor eh indexado pela combinacao unica de 02 chaves;
 * - Equivale a 01 mapa dentro de outro mapa;
 */
export class NestedMap<ValueT, Key1T extends ObjKeyT = string, Key2T extends ObjKeyT = Key1T> {

    private readonly nestedMap: NestedMapT<ValueT, Key1T, Key2T> = new Map()
    private readonly shouldConcatenate: boolean

    constructor(shouldConcatenate?: boolean) {
        this.shouldConcatenate = shouldConcatenate ?? false
    }

    has(key1: Key1T, key2?: Key2T): boolean {
        const aux = this.nestedMap.get(key1)
        return !key2 ? !!aux : !!aux?.get(key2)
    }

    get(key1: Key1T, key2: Key2T): OrUndefT<ValueT> {
        return this.getParsedValue(this.nestedMap.get(key1)?.get(key2))
    }

    set(key1: Key1T, key2: Key2T, value: ValueT): NestedMap<ValueT, Key1T, Key2T> {

        const innerMap: NestedMapInnerT<ValueT, Key2T> = this.nestedMap.get(key1) ?? new Map()

        if (this.shouldConcatenate) {
            const currentValueSet: Set<ValueT> = (innerMap.get(key2) as Set<ValueT>) ?? new Set()
            currentValueSet.add(value)
            innerMap.set(key2, currentValueSet)

        } else
            innerMap.set(key2, value)

        this.nestedMap.set(key1, innerMap)
        return this
    }

    keys(): Array<KeysTupleT<Key1T, Key2T>> { // eslint-disable-line @typescript-eslint/naming-convention

        const keysTuples: Array<KeysTupleT<Key1T, Key2T>> = []

        for (const [key1, innerMap] of this.nestedMap.entries()) {
            const key2List = Array.from(innerMap.keys())
            keysTuples.push(...key2List.map<KeysTupleT<Key1T, Key2T>>(key2 => [key1, key2]))
        }

        return keysTuples
    }

    values(): ValueT[] { // eslint-disable-line @typescript-eslint/naming-convention
        const uniqueList: ValueT[] = []
        for (const innerMap of this.nestedMap.values())
            uniqueList.push(...Array.from(innerMap.values(), value => this.getParsedValue(value)!))
        return uniqueList
    }

    private getParsedValue(value?: ValueT | Set<ValueT>): OrUndefT<ValueT> {
        return (this.shouldConcatenate ? Array.from(value as Set<ValueT>) : value) as ValueT
    }
}
