import { LanguageEnum, InvalidArgsError } from '@hjcostabr76/generics'

/**
 * I18n
 * Classe auxiliar que gerencia de forma centralizada o mecanismo de internacionalizacao da aplicacao.
 *
 * NOTE: Impossivel tipagem estrita do 'generic' pois tipo indexado nao se aplica a interface (nem instancia de classe).
 *
 * TODO: Desenvolver forma de aplicar linguagem padrao global
 */
export class I18n<TextsT> {

    private static instances?: Map<string, I18n<any>>   // [contexto] -> [instancia]

    private readonly textsMap: Map<LanguageEnum, TextsT>

    private constructor(textsMap: Map<LanguageEnum, TextsT>) {
        this.textsMap = textsMap
    }

    static getTexts<TextsT>(context: string, language: LanguageEnum): TextsT {
        const texts = I18n.instances?.get(context)?.textsMap.get(language)
        if (!texts)
            throw new InvalidArgsError('[i18] Contexto de definicao de texto invalido')
        return texts as TextsT
    }

    static getText<TextsT>(context: string, textId: keyof TextsT, language?: LanguageEnum): string {
        const text = this.getTexts<TextsT>(context, language)[textId]
        if (typeof text !== 'string')
            throw new InvalidArgsError('[i18] Propriedades de um contexto devem ser textos!')
        return text
    }

    static addTexts<TextsT>(context: string, language: LanguageEnum, texts: TextsT): void {

        if (!I18n.instances)
            I18n.instances = new Map()

        const textsMap = I18n.instances.get(context)?.textsMap ?? new Map()
        textsMap.set(language, texts)
        I18n.instances.set(context, new I18n<TextsT>(textsMap))
    }
}
