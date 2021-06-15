/**
 * Tipo de algo que deve ser 01 funcao qualquer da qual nao interessa saber a exata assinatura.
 *
 * NOTE: Substitui o uso de 'Function' (boa pratica forcada pelo lint)
 * NOTE: Evitar usar este tipo dando preferencia para 01 tipagem mais especifica, sempre que possivel
 */
export type AnyFunctionT<ReturnT = unknown> = (...args: any[]) => ReturnT

/**
 * Tipo de algo que deve ser 01 objeto mas do qual nao se sabe quais serao suas props ou os tipos dessas props.
 * NOTE: Substitui o uso de '{}' que, na verdade equivale a 'qualquer valor nao anulavel'
 */
export type AnyObjT = Record<string, unknown>

export type AnyFuncT<ReturnT = any> = (...args: any[]) => ReturnT

/**
 * Representa 01 funcao do tipo 'construtor' de 01 determinada classe.
 */
export type ConstructorT<ClassT> = new (...args: any[]) => ClassT

/**
 * Alias para tipagem adequada para chave / propriedade de 01 ojeto qualquer.
 */
export type ObjKeyT = string | number

/**
 * Tipo auxiliar para determinar dinamicamente se 01 valor de 01 determinado tipo sera opcional ou nao.
 */
export type Optional<T, IsOptional extends boolean> = IsOptional extends true ? OrUndefT<T> : T // eslint-disable-line @typescript-eslint/naming-convention

/**
 * Alias para tipar algo que pode ser 01 unidade de 01 determinado tipo OU 01 lista de itens do mesmo tipo.
 */
export type OrArrayT<T> = T | T[]

/**
 * Tipo de alguma coisa que pode ser de 01 determinado tipo ou 01 funcao simples que retorne algo desse mesmo tipo.
 */
export type OrFunctionT<T = any> = T | (() => T)

/**
 * Tipo que pode ser de 01 determinado tipo OU nulo OU indefinido.
 */
export type OrNullishT<T> = OrNullT<OrUndefT<T>>

/**
 * 01 determinado tipo OU nulo.
 */
export type OrNullT<T> = T | null

/** Tipo de dados que pode ser de 01 determinado tipo OU indefinido. */
export type OrUndefT<T> = T | undefined

/** Propriedades de 01 tipo excluindo funcoes / metodos. */
export type NonFunctionPropsT<T> = string & NonNullable<{ [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>

/**
 * Parametros para tratamento de 01 erro ocorrido durante 01 procedimento divido em etapas sequenciais.
 * @see SystemUtils
 */
export type SequentialStepErrorConfigT<StepT> = {
    name: StepT | 'default',
    errorMsg?: string,
    errorHandler?: (err: any, errMsg: string) => void,
    exception?: ConstructorT<Error>,
}

/** Niveis para emissao de logs. */
export type LogLevelT = 'info' | 'warn' | 'error'

/**
 * Equivalente 01 tipo utilitario nativo 'pick' mas com as props compartilhadas opcionais.
 *
 * Thanks to:
 * @see https://www.designcise.com/web/tutorial/how-to-pick-some-properties-of-a-typescript-type-and-make-them-optional
 */
export type PartialPickT<T, K extends keyof T> = { [P in K]?: T[P]; }
