import { OrUndefT } from '@hjcostabr76/generics/type'

/*
 * ======================================================
 * ===  Configuracoes da funcao =========================
 * ======================================================
 */

export type nc_SettingsT = {
    reportLevel: nc_ReportLevelT,
    filePath?: string,
    general?: nc_GeneralSettingsT,
    specific?: nc_ConfigT[],
}

export type nc_VarsT =
    & Required<Omit<nc_GeneralForArrayT, 'typeSuffixesGenerics'>>
    & Record<keyof Omit<nc_GeneralForRegexT, 'arraySuffixesLC' | 'arraySuffixesUC'>, OrUndefT<string>>
    & Record<'typeGenericsRegex' | 'booleanPrefixes' | 'arrayRegex' | 'arrayRegexUC' | 'arrayRegexLC', OrUndefT<string>>

export type nc_GeneralSettingsT = Partial<Record<keyof nc_GeneralForRegexT | keyof nc_GeneralForArrayT, string[]>>

// General settings configured as regex
export type nc_GeneralForRegexT = {
    functionPrefixes?: string[],
    booleanPrefixesLC?: string[],
    booleanPrefixesUC?: string[],
    arraySuffixesLC?: string[],
    arraySuffixesUC?: string[],
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

export type nc_RuleT = {
    '@typescript-eslint/naming-convention': [nc_ReportLevelT, ...nc_ConfigT[]],
}

export type nc_ConfigT = VarLikeConfigTP | MemberLikeConfigTP | TypeLikeConfigTP

type VarLikeConfigTP = VariableConfigTP | ParameterConfigTP | FunctionConfigTP
type TypeLikeConfigTP = ClassConfigTP | InterfaceConfigTP | TypeAliasConfigTP | TypeParamConfigTP | EnumConfigTP
type MemberLikeConfigTP = PropertyConfigTP | AccessorConfigTP | ParamPropConfigTP | MethodConfigTP | EnumMemberConfigTP

// Config [variable like]
type VariableConfigTP = VarLikeBaseTP
type ParameterConfigTP = VarLikeBaseTP
type FunctionConfigTP = VarLikeBaseTP<undefined>

type VarLikeBaseTP<TypeGTP extends OrUndefT<TypeTP> = TypeTP> = ConfigBaseTP<undefined, TypeGTP>

// Config [member like]
type PropertyConfigTP = MemberLikeBaseTP
type AccessorConfigTP = MemberLikeBaseTP
type ParamPropConfigTP = MemberLikeBaseTP<Exclude<ModifierTP, 'abstract' | 'static'>>
type MethodConfigTP = MemberLikeBaseTP<ModifierTP, undefined>
type EnumMemberConfigTP = MemberLikeBaseTP<undefined, undefined>

type MemberLikeBaseTP<ModifierGTP extends OrUndefT<ModifierTP> = ModifierTP, TypeGTP extends OrUndefT<TypeTP> = TypeTP> = ConfigBaseTP<ModifierGTP, TypeGTP>

// Config [type like]
type ClassConfigTP = TypeLikeBaseTP<'abstract'>
type InterfaceConfigTP = TypeLikeBaseTP
type TypeAliasConfigTP = TypeLikeBaseTP
type TypeParamConfigTP = TypeLikeBaseTP
type EnumConfigTP = TypeLikeBaseTP

type TypeLikeBaseTP<ModifierGTP extends OrUndefT<ModifierTP> = undefined> = ConfigBaseTP<ModifierGTP, undefined>

type ConfigBaseTP<ModifierGTP extends OrUndefT<ModifierTP> = ModifierTP, TypeGTP extends OrUndefT<TypeTP> = TypeTP> = {

    selector?: SelectorTP | 'default',
    modifiers?: ModifierGTP[],
    types?: TypeGTP[],

    format?: FormatTP[],
    custom?: CustomRegexTP,
    prefix?: string[],
    suffix?: string[],

    leadingUnderscore?: UnderscoreTP,
    trailingUnderscore?: UnderscoreTP,
    // filter?: any,   // NOTE: Existe mas nao vamos utilzar
}

type CustomRegexTP = { regex: string, match: boolean }

type UnderscoreTP = 'forbid' | 'allow' | 'require'
type TypeTP = 'boolean' | 'string' | 'number' | 'function' | 'array'
type ModifierTP = 'public' | 'protected' | 'private' | 'readonly' | 'static' | 'abstract'
type FormatTP = 'camelCase' | 'strictCamelCase' | 'PascalCase' | 'StrictPascalCase' | 'snake_case' | 'UPPER_CASE'

type SelectorTP = SelectorVarLikeTP | SelectorMemberLikeTP | SelectorTypeLikeTP | 'enum'
type SelectorVarLikeTP = 'variable' | 'function' | 'parameter'
type SelectorTypeLikeTP = 'class' | 'interface' | 'typeAlias' | 'enum' | 'typeParameter'
type SelectorMemberLikeTP = 'property' | 'parameterProperty' | 'method' | 'accessor' | 'enumMember'

/*
 * ======================================================
 * ===  Tipos auxiliares ================================
 * ======================================================
 */

export type nc_ReportLevelT = 'error' | 'warn' | 'off'
