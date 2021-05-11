import { InvalidArgsError } from '../error'
import { AnyObjT, ConstructorT, OrUndefT } from '../type'

/**
 * UTILS
 * Reune funcoes utilitarias para manipular objetos.
 */
export const ObjectUtils = {

    /** Determina & retorna quantidde de niveis aninhados dentro de 01 objeto. */
    getDepth(obj: AnyObjT): number {

        if (typeof obj !== 'object')
            throw new InvalidArgsError('Parametro object deveria ser 01 objeto')

        let depth = 1

        for (const key of Object.keys(obj)) {
            if (typeof obj[key] === 'object')
                depth = Math.max((ObjectUtils.getDepth(obj[key] as AnyObjT) + 1), depth)
        }

        return depth
    },

    /** Retorna nome da classe instanciada por 01 objeto. */
    getInstanceClassName(obj: AnyObjT): OrUndefT<string> {
        return Object.create(obj)?.constructor?.name as OrUndefT<string>
    },

    /** Retorna nome da classe associada a 01 funcao do tipo 'construtor'. */
    getConstructorClassName(constructor: ConstructorT<any> | Function): OrUndefT<string> {
        return constructor.prototype?.constructor?.name as OrUndefT<string>
    },

    /**
     * Retorna nome de 01 classe com base num parametro que pode ser seu construtor ou o proprio
     * valor desejado (util para simplicacao & overloading de funcoes / metodos).
     */
    getClassName(nameOrConstructor: string | ConstructorT<any>): string {
        return (typeof nameOrConstructor === 'function')
            ? ObjectUtils.getConstructorClassName(nameOrConstructor) ?? ''
            : nameOrConstructor
    },

    /**
     * Avalia 01 objeto & aplica a cada 01 de suas propriedades 01 funcao de transformacao para
     * retornar 01 novo objeto que possui propriedades de mesmos nomes mas com valores e/ou tipos
     * modificados pela funcao de transformacao.
     */
    transform<ObjT, PropT = any>(obj: ObjT, transformer: (prop: any) => PropT): Record<keyof ObjT, PropT> {
        const objKeys = Object.keys(obj) as Array<keyof ObjT>
        const returnObj: Partial<Record<keyof ObjT, PropT>> = {}
        objKeys.forEach(key => { returnObj[key] = transformer(obj[key]) })
        return returnObj as Record<keyof ObjT, PropT>
    },

    /**
     * Retorna chaves de 01 objeto cujo as chaves sao (numeros / strings numericas) garantindo tipo
     * numerico para todas elas.
     */
    getNumericKeys(obj: { [key: number]: any }): number[] {
        return Object.keys(obj).map(key => +key).filter(key => !Number.isNaN(key))
    },

    /** Retorna copia de 01 objeto removendo 01 lista de propriedaades do mesmo. */
    getObjWithoutSomeProps<ObjT = AnyObjT>(obj: ObjT, propsToRemoveList: Array<keyof ObjT>): Partial<ObjT> {
        const clearedObj = { ...obj }
        for (const propToRemove of propsToRemoveList)
            delete clearedObj[propToRemove]
        return clearedObj
    },

    /** Encapsula pre-tratamento possivelmente necessario junto a conversao de string json em objeto. */
    parseJson(jsonString: string): OrUndefT<AnyObjT> {
        try {

            jsonString = jsonString
                .replace(/([^\w'])(\w+)(:)/g, '\'$2\'$3')   // Inclui aspas entre nomes das propriedades
                .replace(/'/g, '"')                         // Garante aspas duplas
                .replace(/,\s}/g, '}')                      // Remover ultima virgula

            return JSON.parse(jsonString) as AnyObjT

        } catch (error) {}
    }
}
