/**
 * TYPE
 * Tipo de algo que deve ser 01 funcao qualquer da qual nao interessa saber a exata assinatura.
 *
 * NOTE: Substitui o uso de 'Function' (boa pratica forcada pelo lint)
 * NOTE: Evitar usar este tipo dando preferencia para 01 tipagem mais especifica, sempre que possivel
 */
export type AnyFunctionTP<ReturnTP = unknown> = (...args: any[]) => ReturnTP
