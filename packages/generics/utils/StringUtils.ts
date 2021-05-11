import figlet from 'figlet'

/**
 * UTILITARIOS
 * Define funcoes utilitarias para manipular strings.
 */
export const StringUtils = {

    /** Retorna string minuscaula sem espacos e nem caracters especiais. */
    toLowerCaseWithNoSpaces(string: string): string {
        return StringUtils.removeSpecialCharacters(string, true).toLowerCase()
    },

    /**
     * Retorna string sem caracteres especiais.
     * TODO: atualizar isso aqui
     */
    removeSpecialCharacters(string: string, shouldRemoveSpaces = false): string {
        let allowedGroups = '\u0041-\u005a\u0061-\u007a'
        allowedGroups += !shouldRemoveSpaces ? '\u0020' : ''
        return string.normalize('NFD').replace(new RegExp(`[^${allowedGroups}]`, 'g'), '')
    },

    /** Retorna string da forma 'camel-case' na forma 'kebab-case'. */
    camelCaseToKebabCase(string: string): string { // eslint-disable-line @typescript-eslint/naming-convention
        string = string.replace(/([\da-z])([A-Z])/g, '$1-$2').toLowerCase()
        return StringUtils.removeSpecialCharacters(string, true)
    },

    /** Altera & retorna 01 string na forma 'camel-case'. */
    toCamelCase(string: string): string {

        if (!string.includes('-'))
            return string

        return string
            .split('-')
            .reduce(
                (camelCaseString: string, stringToken: string) => {
                    if (camelCaseString)
                        stringToken = (stringToken.charAt(0).toUpperCase() + stringToken.slice(1))
                    return (camelCaseString + stringToken)
                },
                ''
            )
    },

    /** Obtem a primeira e ultima iniciais de uma string. */
    getFirstAndLastInitials(string: string): string {

        if (!string)
            return ''

        const initials = string.match(/\b\w/g) ?? []
        return ((initials.shift() ?? '') + (initials.pop() ?? '')).toUpperCase()
    },

    /** Retorna string sem nenhum acento. */
    removeAccents(string: string): string {

        const replacingCharGroups = {
            áàâã: 'a',
            éèê: 'e',
            íìî: 'i',
            óòôõ: 'o',
            úùû: 'u',
            ç: 'c'

        } as const

        for (const isUpperCase of [false, true]) {
            for (const charGroup of Object.keys(replacingCharGroups)) {
                const charGroupForRegex = isUpperCase ? charGroup.toLocaleUpperCase() : charGroup
                const regex = new RegExp(`[${charGroupForRegex}]`, 'g')
                string = string.replace(regex, replacingCharGroups[charGroup as keyof typeof replacingCharGroups])
            }
        }

        return string
    },

    /** Retorna sem acento, caracteres especiais, letras maiusculas ou espacos. */
    getSlugStyleString(string: string, replaceSpaceWith = '-', maxLength = 0) {

        string = StringUtils.removeAccents(string.toLowerCase())
        string = StringUtils.removeSpecialCharacters(string)

        replaceSpaceWith = replaceSpaceWith || '-'
        string = string.replace(/\s/g, replaceSpaceWith)

        if (maxLength) {
            const regex = new RegExp(`^(.{${maxLength}})(.*)`, 'g')
            string = string.replace(regex, '$1')
        }

        return string
    },

    /** Separar string em 2, pegando a primeira ocorrencia do separador. */
    splitOnce(string: string, separator: string): [string, string] {
        const index = string.indexOf(separator)
        return [string.slice(0, index), string.slice(index + 1)]
    },

    /**
     * Retorna 01 string retirando um determinado conjunto especifico de caracteres SE eles estiverem
     * no COMECO da string.
     */
    stripInitialChars(string: string, chars: string): string {
        if (string === chars)
            return ''
        const regex = new RegExp(`^(${chars})(.+)`)
        return string.replace(regex, '$2')
    },

    /**
     * Retorna 01 string retirando um determinado conjunto especifico de caracteres SE eles estiverem
     * no FIM da string.
     */
    stripEndingChars(string: string, chars: string): string {
        if (string === chars)
            return ''
        const regex = new RegExp(`(.+)(${chars})$`)
        return string.replace(regex, '$1')
    },

    /**
     * Retorna 01 string retirando um determinado conjunto especifico de caracteres SE eles estiverem
     * no COMECO ou FIM da string.
     */
    stripBorderChars(string: string, chars: string): string {
        return StringUtils.stripEndingChars(StringUtils.stripInitialChars(string, chars), chars)
    },

    /**
     * Retorna 01 string retirando um determinado conjunto especifico de caracteres SE eles aparecerem
     * duplicados no inicio da string.
     */
    stripRepeatedBegin(string: string, chars: string): string {
        return string.replace(new RegExp(`^(${chars})(${chars}.*)`, 'g'), '$2')
    },

    /**
     * Retorna 01 string removendo 01 trecho de caracteres caso eles aparecam repetidos no fim da
     * string original.
     */
    stripRepeatedEnding(text: string, ending: string): string {
        return text.replace(new RegExp(`(${ending})+$`), '$1')
    },

    /**
     * Retorna string com o texto solicitado formatado como uma string 'bonitinha' no estilo caracteristico
     * para exibicao via terminal.
     */
    getPrettyTerminalText(text: string): string {
        return figlet.textSync(text, 'Ogre').replace(/\n/g, '\n    ') as string
    },
}
