import { OrUndefT } from '@hjcostabr76/generics/type'

/*
 * ======================================================
 * ===  Configuracoes da funcao =========================
 * ======================================================
 */

export type NCSettingsT = {
    reportLevel: NCReportLevelT,
    filePath?: string,
    general?: NCGeneralSettingsT,
    specifics?: NCConfigT[],
}

export type NCVarsT =
    & Required<Omit<NCGeneralForArrayT, 'typeSuffixesGenerics'>>
    & Record<keyof Omit<NCGeneralForRegexT, 'arraySuffixesLC' | 'arraySuffixesUC'>, OrUndefT<string>>
    & Record<'typeGenericsRegex' | 'booleanPrefixes' | 'arrayRegex' | 'arrayRegexUC' | 'arrayRegexLC', OrUndefT<string>>

export type NCGeneralSettingsT = Partial<Record<keyof NCGeneralForRegexT | keyof NCGeneralForArrayT, string[]>>

// General settings configured as regex
export type NCGeneralForRegexT = {

    functionPrefixes?: string[],

    /* eslint-disable @typescript-eslint/naming-convention */
    booleanPrefixesLC?: string[],
    booleanPrefixesUC?: string[],
    arraySuffixesLC?: string[],
    arraySuffixesUC?: string[],
    /* eslint-enable @typescript-eslint/naming-convention */
}

// General settings configured as arrays
export type NCGeneralForArrayT = {
    interfacePrefixes?: string[],
    enumSuffixes?: string[],
    classSuffixes?: string[],
    typeSuffixes?: string[],
    typeSuffixesGenerics?: string[],
}

/*
 * ======================================================
 * ===  Tipos da regra (plugin esling typescript) =======
 * ======================================================
 */

export type NCRuleT = {
    '@typescript-eslint/naming-convention': [NCReportLevelT, ...NCConfigT[]], // eslint-disable-line @typescript-eslint/naming-convention
}

export type NCConfigT = VarLikeConfigT | MemberLikeConfigT | TypeLikeConfigT

type VarLikeConfigT = VariableConfigT | ParameterConfigT | FunctionConfigT
type TypeLikeConfigT = ClassConfigT | InterfaceConfigT | TypeAliasConfigT | TypeParamConfigT | EnumConfigT
type MemberLikeConfigT = PropertyConfigT | AccessorConfigT | ParamPropConfigT | MethodConfigT | EnumMemberConfigT

// Config [variable like]
type VariableConfigT = VarLikeBaseT
type ParameterConfigT = VarLikeBaseT
type FunctionConfigT = VarLikeBaseT<undefined>

type VarLikeBaseT<BaseT extends OrUndefT<VarTypeT> = VarTypeT> = ConfigBaseT<undefined, BaseT>

// Config [member like]
type PropertyConfigT = MemberLikeBaseT
type AccessorConfigT = MemberLikeBaseT
type ParamPropConfigT = MemberLikeBaseT<Exclude<ClassModifierT, 'abstract' | 'static'>>
type MethodConfigT = MemberLikeBaseT<ClassModifierT, undefined>
type EnumMemberConfigT = MemberLikeBaseT<undefined, undefined>

type MemberLikeBaseT<ModifierParamT extends OrUndefT<ClassModifierT> = ClassModifierT, T extends OrUndefT<VarTypeT> = VarTypeT> = ConfigBaseT<ModifierParamT, T>

// Config [type like]
type ClassConfigT = TypeLikeBaseT<'abstract'>
type InterfaceConfigT = TypeLikeBaseT
type TypeAliasConfigT = TypeLikeBaseT
type TypeParamConfigT = TypeLikeBaseT
type EnumConfigT = TypeLikeBaseT

type TypeLikeBaseT<ModifierT extends OrUndefT<ClassModifierT> = undefined> = ConfigBaseT<ModifierT, undefined>

type ConfigBaseT<ModifierT extends OrUndefT<ClassModifierT> = ClassModifierT, TypeT extends OrUndefT<VarTypeT> = VarTypeT> = {

    selector?: SelectorT | 'default' | undefined,
    modifiers?: ModifierT[] | undefined,
    types?: TypeT[],

    /* eslint-disable @typescript-eslint/naming-convention */
    format?: FormatT[] | undefined,
    custom?: CustomRegexT | undefined,
    prefix?: string[] | undefined,
    suffix?: string[] | undefined,

    leadingUnderscore?: UnderscoreT | undefined,
    trailingUnderscore?: UnderscoreT | undefined,
    // filter?: any,   // NOTE: Existe mas nao vamos utilzar
    /* eslint-enable @typescript-eslint/naming-convention */
}

type CustomRegexT = { regex: string, match: boolean }

type UnderscoreT = 'forbid' | 'allow' | 'require'
type VarTypeT = 'boolean' | 'string' | 'number' | 'function' | 'array'
type ClassModifierT = 'public' | 'protected' | 'private' | 'readonly' | 'static' | 'abstract'
type FormatT = 'camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE'

type SelectorT = SelectorVarLikeT | SelectorMemberLikeT | SelectorTypeLikeT | 'enum'
type SelectorVarLikeT = 'variable' | 'function' | 'parameter'
type SelectorTypeLikeT = 'class' | 'interface' | 'typeAlias' | 'enum' | 'typeParameter'
type SelectorMemberLikeT = 'property' | 'parameterProperty' | 'method' | 'accessor' | 'enumMember'

/*
 * ======================================================
 * ===  Tipos auxiliares ================================
 * ======================================================
 */

export type NCReportLevelT = 'error' | 'warn' | 'off'
