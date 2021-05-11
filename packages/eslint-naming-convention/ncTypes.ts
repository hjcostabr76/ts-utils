import { OrUndefT } from '@hjcostabr76/generics/type'

/*
 * ======================================================
 * ===  Configuracoes da funcao =========================
 * ======================================================
 */

export type ncSettingsT = {
    reportLevel: ncReportLevelT,
    filePath?: string,
    general?: nc_GeneralSettingsT,
    specifics?: ncConfigT[],
}

export type ncVarsT =
    & Required<Omit<nc_GeneralForArrayT, 'typeSuffixesGenerics'>>
    & Record<keyof Omit<nc_GeneralForRegexT, 'arraySuffixesLC' | 'arraySuffixesUC'>, OrUndefT<string>>
    & Record<'typeGenericsRegex' | 'booleanPrefixes' | 'arrayRegex' | 'arrayRegexUC' | 'arrayRegexLC', OrUndefT<string>>

export type nc_GeneralSettingsT = Partial<Record<keyof nc_GeneralForRegexT | keyof nc_GeneralForArrayT, string[]>>

// General settings configured as regex
export type nc_GeneralForRegexT = {

    functionPrefixes?: string[],

    /* eslint-disable @typescript-eslint/naming-convention */
    booleanPrefixesLC?: string[],
    booleanPrefixesUC?: string[],
    arraySuffixesLC?: string[],
    arraySuffixesUC?: string[],
    /* eslint-enable @typescript-eslint/naming-convention */
}

// General settings configured as arrays
export type nc_GeneralForArrayT = {
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

export type ncRuleT = {
    '@typescript-eslint/naming-convention': [ncReportLevelT, ...ncConfigT[]], // eslint-disable-line @typescript-eslint/naming-convention
}

export type ncConfigT = VarLikeConfigT | MemberLikeConfigT | TypeLikeConfigT

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

    selector?: SelectorT | 'default',
    modifiers?: ModifierT[],
    types?: TypeT[],

    format?: FormatT[],
    custom?: CustomRegexT,
    prefix?: string[],
    suffix?: string[],

    leadingUnderscore?: UnderscoreT,
    trailingUnderscore?: UnderscoreT,
    // filter?: any,   // NOTE: Existe mas nao vamos utilzar
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

export type ncReportLevelT = 'error' | 'warn' | 'off'
