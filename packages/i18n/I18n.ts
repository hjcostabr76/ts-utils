import { LanguageEnum } from '@system/enum/LanguageEnum'
import { InvalidArgsError } from '@system/error/InvalidArgsError'

/**
 * I18n
 * Classe auxiliar que gerencia de forma centralizada o mecanismo de internacionalizacao da aplicacao.
 *
 * NOTE: Impossivel tipagem estrita do 'generic' pois tipo indexado nao se aplica a interface (nem instancia de classe).
 *
 * TODO: Desenvolver forma de aplicar linguagem padrao global
 */
export class I18n<TextsGTP> {

    private static instances?: Map<string, I18n<any>>   // [contexto] -> [instancia]

    private readonly textsMap: Map<LanguageEnum, TextsGTP>

    private constructor(textsMap: Map<LanguageEnum, TextsGTP>) {
        this.textsMap = textsMap
    }

    static getTexts<TextsGTP>(context: string, language: LanguageEnum): TextsGTP {
        const texts = I18n.instances?.get(context)?.textsMap.get(language)
        if (!texts)
            throw new InvalidArgsError('[i18] Contexto de definicao de texto invalido')
        return texts as TextsGTP
    }

    static getText<TextsGTP>(context: string, textId: keyof TextsGTP, language?: LanguageEnum): string {
        const text = this.getTexts<TextsGTP>(context, language)[textId]
        if (typeof text !== 'string')
            throw new InvalidArgsError('[i18] Propriedades de um contexto devem ser textos!')
        return text
    }

    static addTexts<TextsGTP>(context: string, language: LanguageEnum, texts: TextsGTP): void {

        if (!I18n.instances)
            I18n.instances = new Map()

        const textsMap = I18n.instances.get(context)?.textsMap ?? new Map()
        textsMap.set(language, texts)
        I18n.instances.set(context, new I18n<TextsGTP>(textsMap))
    }
}
