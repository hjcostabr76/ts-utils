/**
 * UTILS
 * Encapsula logica auxiliar para uso operacoes matematicas.
 */
export const MathUtils = {

    /** Retorna um numero inteiro aleatorio compreendido entre um determinado intervalo. */
    getRandomNumber(max: number, min = 0): number {
        const randomValue = Math.round(Math.random() * (max - min))
        return (min + randomValue)
    },

    /** Calcula & retorna razao entre 02 numeros na forma de porcentagem. */
    getPercentage(numerator?: number, denominator?: number, shouldRound = false): number {

        if (!numerator || !denominator)
            return 0

        const percentage = (numerator / denominator) * 100
        return shouldRound ? Math.round(percentage) : percentage
    },

    /** Determina se 01 numero inteiro qualquer eh PAR. */
    isEven(numberValue: number): boolean {
        return (numberValue === 0 || numberValue % 2 === 0)
    },

    /** Determina se 01 numero inteiro qualquer eh IMPAR. */
    isOdd(numberValue: number): boolean {
        return (numberValue % 2 !== 0)
    },
}
