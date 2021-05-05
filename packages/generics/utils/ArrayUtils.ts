import { SystemUtils } from './SystemUtils'

/**
 * UTILITARIOS para manipular vetores.
 */
export const ArrayUtils = {

    /** Realiza ordenacao simples de listas de objetos. Usando 01 propriedade do mesmo como criterio. */
    sortObjects<T>(objectList: T[], sortKey: keyof T): T[] {
        return objectList.sort((object1, object2) => {

            const value1 = object1[sortKey]
            const value2 = object2[sortKey]

            if (typeof value1 === typeof value2) {

                if (typeof value1 === 'string')
                    return value1.localeCompare((value2 as unknown) as string)

                if (typeof value1 === 'number' && value1 !== value2)
                    return ((value1 < value2) ? -1 : 1)

            } else {

                if (SystemUtils.isNullish(value1))
                    return -1
                if (SystemUtils.isNullish(value2))
                    return 1
            }

            return 0
        })
    },

    /** Retorna numero do ultimo indice valido num vetor. */
    getLastIndex(list: any[]): number {
        return list.length ? (list.length - 1) : 0
    },

    /** Transforma vetor de strings numericas num vetor de numeros. */
    toNumberList(list: string[]): number[] {
        return list.map(item => +item).filter(item => !Number.isNaN(item))
    },

    /** Transforma vetor de numeros num vetor de strings numericas. */
    toStringList(list: number[]): string[] {
        return list.map(item => item.toString())
    },
}
