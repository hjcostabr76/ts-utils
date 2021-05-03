import { SettingsTP, ConfigTP, GeneralSettingsTP, VarsTP, GeneralForRegexTP, GeneralForArrayTP } from "./types"
import { DEFAULT_SETTINGS } from "./default-settings"

/** Gera & retorna configuracao da regra. */
export function getConfigs(settings?: Partial<SettingsTP>): ConfigTP[] {    // eslint-disable-line max-lines-per-function

    const vars = getVars(settings?.general)

    return [

        // global
        {
            selector: 'default',
            format: ['camelCase', 'UPPER_CASE'],
            trailingUnderscore: 'forbid',
        },

        // variavel
        {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
        },
        {
            selector: 'variable',
            types: ['boolean'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            custom: vars.booleanPrefixes
                ? { match: true, regex: `^(${vars.booleanPrefixes})` }
                : undefined
        },
        {
            selector: 'variable',
            types: ['array'],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            custom: vars.arrayRegex
                ? { match: true, regex: `^${vars.arrayRegex}$` }
                : undefined,
        },

        // funcao
        {
            selector: 'function',
            format: ['camelCase'],
            custom: vars.functionPrefixes
                ? { match: true, regex: `^(${vars.functionPrefixes})` }
                : undefined,
        },

        // parametro
        {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
        },
        {
            selector: 'parameter',
            types: ['boolean'],
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            custom: vars.booleanPrefixesLC
                ? { match: true, regex: `^(${vars.booleanPrefixesLC})` }
                : undefined
        },
        {
            selector: 'parameter',
            types: ['array'],
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            custom: vars.arrayRegexLC
                ? { match: true, regex: `^${vars.arrayRegexLC}$` }
                : undefined,
        },

        // propriedade

        {   // ?? :??
            selector: 'property',
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
        },

        {   // ?? :(string|number|function)
            selector: 'property',
            types: ['string', 'number', 'function'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
        },
        {   // ?? :array
            selector: 'property',
            types: ['array'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            custom: vars.arrayRegexLC
                ? { match: true, regex: `^${vars.arrayRegexLC}$` }
                : undefined,
        },
        {   // ?? :boolean
            selector: 'property',
            types: ['boolean'],
            format: ['camelCase'],
            leadingUnderscore: 'forbid',
            custom: vars.booleanPrefixesLC
                ? { match: true, regex: `^(${vars.booleanPrefixesLC})` }
                : undefined,
        },

        {   // ?? static readonly :??
            selector: 'property',
            modifiers: ['readonly'],
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'forbid',
        },

        {   // ?? static readonly :(string|number|function)
            selector: 'property',
            types: ['string', 'number', 'function'],
            modifiers: ['readonly'],
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'forbid',
        },
        {   // ?? static readonly :array
            selector: 'property',
            types: ['array'],
            modifiers: ['readonly'],
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'forbid',
            custom: vars.arrayRegex
                ? { match: true, regex: `^${vars.arrayRegex}$` }
                : undefined,
        },
        {   // ?? static readonly :boolean
            selector: 'property',
            types: ['boolean'],
            modifiers: ['readonly'],
            format: ['camelCase', 'UPPER_CASE'],
            leadingUnderscore: 'forbid',
            custom: vars.booleanPrefixes
                ? { match: true, regex: `^(${vars.booleanPrefixes})` }
                : undefined,
        },

        // metodo
        {
            selector: 'method',
            format: ['camelCase'],
            custom: vars.functionPrefixes
                ? { match: true, regex: `^(${vars.functionPrefixes})` }
                : undefined,
        },

        // enum
        {
            selector: 'enum',
            format: ['PascalCase'],
            suffix: vars.enumSuffixes,
        },
        {
            selector: 'enumMember',
            format: ['UPPER_CASE']
        },

        // classe
        {
            selector: 'class',
            format: ['PascalCase'],
            suffix: vars.classSuffixes,
        },

        // interface
        {
            selector: 'interface',
            format: ['PascalCase'],
            prefix: vars.interfacePrefixes,
        },

        // type
        {
            selector: 'typeAlias',
            format: ['PascalCase'],
            suffix: vars.typeSuffixes,
            leadingUnderscore: 'forbid'
        },
        {
            selector: 'typeParameter',
            format: ['PascalCase'],
            custom: vars.typeGenericsRegex
                ? { match: true, regex: vars.typeGenericsRegex }
                : undefined,
            leadingUnderscore: 'forbid'
        },

        // custom
        ...(settings?.specific ?? [])
    ]
}

/** Processa & retorna variaveis utilizadas na configuracao da regra. */
function getVars(generalSettings?: GeneralSettingsTP): VarsTP {

    // Booleanos concatenados
    const booleanPrefixesLC = getValueForRegexList('booleanPrefixesLC', generalSettings)
    const booleanPrefixesUC = getValueForRegexList('booleanPrefixesUC', generalSettings)
    
    let booleanPrefixes = booleanPrefixesLC
    if (booleanPrefixesUC)
        booleanPrefixes = booleanPrefixes ? `${booleanPrefixes}|${booleanPrefixesUC}` : booleanPrefixesUC
    
    // Vetores
    const arraySuffixesLC = generalSettings?.arraySuffixesLC ?? DEFAULT_SETTINGS.arraySuffixesLC
    const arraySuffixesUC = generalSettings?.arraySuffixesUC ?? DEFAULT_SETTINGS.arraySuffixesUC
    
    const arrayRegexLC = `(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(${arraySuffixesLC.join('|')})))`
    const arrayRegexUC = `(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(${arraySuffixesUC.map(suffix => suffix === 'S' ? suffix : `_${suffix}`).join('|')})))`
    const arrayRegex = `${arrayRegexLC}|${arrayRegexUC}`

    // Generic Types
    const genericSuffixes = generalSettings?.typeSuffixesGenerics ?? DEFAULT_SETTINGS.typeSuffixesGenerics
    const typeGenericsRegex = genericSuffixes.length ? `^([A-Z]|([A-Z][a-z\\d]+)*[A-Z]?(${genericSuffixes.join('|')}))$` : undefined

    return {
        
        interfacePrefixes: getValueForArrayList('interfacePrefixes', generalSettings),
        
        enumSuffixes: getValueForArrayList('enumSuffixes', generalSettings),
        typeSuffixes: getValueForArrayList('typeSuffixes', generalSettings),
        classSuffixes: getValueForArrayList('classSuffixes', generalSettings),
        
        functionPrefixes: getValueForRegexList('functionPrefixes', generalSettings),
        typeGenericsRegex,

        booleanPrefixesLC,
        booleanPrefixesUC,
        booleanPrefixes,

        arrayRegexLC,
        arrayRegexUC,
        arrayRegex,
    }
}


function getValueForArrayList(key: keyof GeneralForArrayTP, generalSettings?: GeneralSettingsTP): string[] {
    return generalSettings?.[key] ?? DEFAULT_SETTINGS[key]
}

function getValueForRegexList(key: keyof GeneralForRegexTP, generalSettings?: GeneralSettingsTP): string | undefined {
    const list = generalSettings?.[key] ?? DEFAULT_SETTINGS[key]
    if (list.length)
        return `${list.join('|')}`
}