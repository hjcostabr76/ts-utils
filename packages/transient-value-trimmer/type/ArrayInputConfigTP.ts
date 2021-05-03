/**
 * TYPE
 * Define formato para configurar geracao de 01 instancia do TransientValueTrimmer
 * (eliminador de valor transitorio) com entrada multipla de valores (array).
 *
 * @see TransientValueTrimmerConfigTP
 */
export type ArrayInputConfigTP = {
    valuesToListen?: number[],
    valuesToUse?: number[],
}
