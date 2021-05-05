/**
 * Tipo de algo que deve ser 01 funcao qualquer da qual nao interessa saber a exata assinatura.
 *
 * NOTE: Substitui o uso de 'Function' (boa pratica forcada pelo lint)
 * NOTE: Evitar usar este tipo dando preferencia para 01 tipagem mais especifica, sempre que possivel
 */
export type AnyFunctionTP<ReturnTP = unknown> = (...args: any[]) => ReturnTP

/**
 * Tipo de algo que deve ser 01 objeto mas do qual nao se sabe quais serao suas props ou os tipos dessas props.
 * NOTE: Substitui o uso de '{}' que, na verdade equivale a 'qualquer valor nao anulavel'
 */
export type AnyObjTP = Record<string, unknown>

/**
 * Representa 01 funcao do tipo 'construtor' de 01 determinada classe.
 */
export type ConstructorTP<ClassTP> = new (...args: any[]) => ClassTP

/**
 * Alias para tipagem adequada para chave / propriedade de 01 ojeto qualquer.
 */
export type ObjKeyTP = string | number

/**
 * Tipo auxiliar para determinar dinamicamente se 01 valor de 01 determinado tipo sera opcional ou nao.
 */
export type OptionalTP<T, IsOptional extends boolean> = IsOptional extends true ? OrUndefTP<T> : T

/**
 * Alias para tipar algo que pode ser 01 unidade de 01 determinado tipo OU 01 lista de itens do mesmo tipo.
 */
export type OrArrayTP<T> = T | T[]

/**
 * Tipo de alguma coisa que pode ser de 01 determinado tipo ou 01 funcao simples que retorne algo desse mesmo tipo.
 */
export type OrFunctionTP<T = any> = T | (() => T)

/**
 * Tipo que pode ser de 01 determinado tipo OU nulo OU indefinido.
 */
export type OrNullishTP<T> = OrNullTP<OrUndefTP<T>>

/**
 * 01 determinado tipo OU nulo.
 */
export type OrNullTP<T> = T | null

/**
 * Tipo de dados que pode ser de 01 determinado tipo OU indefinido.
 */
export type OrUndefTP<T> = T | undefined

/**
 * Parametros para tratamento de 01 erro ocorrido durante 01 procedimento divido em etapas sequenciais.
 * @see SystemUtils
 */
export type ErrorHandlingConfigTP<StepsTP> = {
    name: StepsTP | 'default',
    errorMsg?: string,
    errorHandler?: (err: any, errMsg: string) => void,
    exception?: ConstructorTP<Error>,
}
