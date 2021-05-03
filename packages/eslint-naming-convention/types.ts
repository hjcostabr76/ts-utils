/*
 * ======================================================
 * ===  Configuracoes da funcao =========================
 * ======================================================
 */

export type SettingsTP = {
    reportLevel: ReportLevelTP,
    filePath?: string,
    general?: GeneralSettingsTP,
    specific?: ConfigTP[],
}

export type VarsTP =
    & Required<Omit<GeneralForArrayTP, 'typeSuffixesGenerics'>>
    & Record<keyof Omit<GeneralForRegexTP, 'arraySuffixesLC' | 'arraySuffixesUC'>, OrUndefinedTP<string>>
    & Record<'typeGenericsRegex' | 'booleanPrefixes' | 'arrayRegex' | 'arrayRegexUC' | 'arrayRegexLC', OrUndefinedTP<string>>

export type GeneralSettingsTP = Partial<Record<keyof GeneralForRegexTP | keyof GeneralForArrayTP, string[]>>

// General settings configured as regex
export type GeneralForRegexTP = {
    functionPrefixes?: string[],
    booleanPrefixesLC?: string[],
    booleanPrefixesUC?: string[],
    arraySuffixesLC?: string[],
    arraySuffixesUC?: string[],
}

// General settings configured as arrays
export type GeneralForArrayTP = {
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

export type RuleTP = {
    '@typescript-eslint/naming-convention': [ReportLevelTP, ...ConfigTP[]],
}

export type ConfigTP = VarLikeConfigTP | MemberLikeConfigTP | TypeLikeConfigTP

type VarLikeConfigTP = VariableConfigTP | ParameterConfigTP | FunctionConfigTP
type TypeLikeConfigTP = ClassConfigTP | InterfaceConfigTP | TypeAliasConfigTP | TypeParamConfigTP | EnumConfigTP
type MemberLikeConfigTP = PropertyConfigTP | AccessorConfigTP | ParamPropConfigTP | MethodConfigTP | EnumMemberConfigTP

// Config [variable like]
type VariableConfigTP = VarLikeBaseTP
type ParameterConfigTP = VarLikeBaseTP
type FunctionConfigTP = VarLikeBaseTP<undefined>

type VarLikeBaseTP<TypeGTP extends OrUndefinedTP<TypeTP> = TypeTP> = ConfigBaseTP<undefined, TypeGTP>

// Config [member like]
type PropertyConfigTP = MemberLikeBaseTP
type AccessorConfigTP = MemberLikeBaseTP
type ParamPropConfigTP = MemberLikeBaseTP<Exclude<ModifierTP, 'abstract' | 'static'>>
type MethodConfigTP = MemberLikeBaseTP<ModifierTP, undefined>
type EnumMemberConfigTP = MemberLikeBaseTP<undefined, undefined>

type MemberLikeBaseTP<ModifierGTP extends OrUndefinedTP<ModifierTP> = ModifierTP, TypeGTP extends OrUndefinedTP<TypeTP> = TypeTP> = ConfigBaseTP<ModifierGTP, TypeGTP>

// Config [type like]
type ClassConfigTP = TypeLikeBaseTP<'abstract'>
type InterfaceConfigTP = TypeLikeBaseTP
type TypeAliasConfigTP = TypeLikeBaseTP
type TypeParamConfigTP = TypeLikeBaseTP
type EnumConfigTP = TypeLikeBaseTP

type TypeLikeBaseTP<ModifierGTP extends OrUndefinedTP<ModifierTP> = undefined> = ConfigBaseTP<ModifierGTP, undefined>

type ConfigBaseTP<ModifierGTP extends OrUndefinedTP<ModifierTP> = ModifierTP, TypeGTP extends OrUndefinedTP<TypeTP> = TypeTP> = {

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

export type ReportLevelTP = 'error' | 'warn' | 'off'
type OrUndefinedTP<GTP> = GTP | undefined
