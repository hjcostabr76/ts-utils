import moment from 'moment-timezone'

import { DateFormatEnum, TimeBaseEnum } from '../enum'
import { OrUndefT } from '../type'

/**
 * UTILS
 * Reune funcoes utilitarias para manipular datas.
 *
 * TODO: Substituir moment.js
 */
export const DateUtils = {

    /**
     * Retorna uma instancia de Data de acordo com valor, formato e timezone passados.
     * TODO: 2021-05-06 - Definir valores padrao para os parametros
     */
    fixTimeZone(
        date: Date | string,
        format: DateFormatEnum,
        timezone: string
    ): OrUndefT<Date> {
        return moment(moment.tz(date, timezone).format(format)).toDate()
    },

    /** Troca a hora da data 1 para a data 2. */
    mergeHour(date1: Date, date2: Date): Date {
        const newDate = new Date()
        newDate.setTime(date1.getTime())
        newDate.setHours(date2.getHours(), date2.getMinutes(), date2.getSeconds())
        return newDate
    },

    /** Retorna uma data formatada conforme formatacao determina via parametro. */
    getFormatted(date: string | Date, format: DateFormatEnum): string {
        return moment(date).format(format)
    },

    /** Transforma string data. */
    toDate(dateString: string, dateStringFormat: DateFormatEnum): Date {
        return moment(dateString, dateStringFormat).toDate()
    },

    /** Valida 01 string quanto a representar 01 data valida (formato americano). */
    isValidUSADateString(dateString: string): boolean {
        try {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString))
                return false
            return moment(dateString, DateFormatEnum.US).isValid()

        } catch (error) {
            return false
        }
    },

    /** Define HORAS & MINUTOS de 01 data. */
    setTime(date: Date, hours: number, minutes: number): Date {
        return moment(date)
            .set(TimeBaseEnum.HOUR, hours)
            .set(TimeBaseEnum.MINUTE, minutes)
            .toDate()
    },

    /** Obtem hora:minuros do horario de uma data. */
    getTimeString(date: Date): string {
        const hour = `${moment(date).get(TimeBaseEnum.HOUR)}`.padStart(2, '0')
        const minute = `${moment(date).get(TimeBaseEnum.MINUTE)}`.padStart(2, '0')
        return `${hour}:${minute}`
    },

    /** SOMA valor de tempo a 01 data. */
    add(date: Date, value: number, timeBase: TimeBaseEnum): Date {
        return moment(date).add(value, timeBase).toDate()
    },

    /** SUBTRAI valor de tempo a 01 data. */
    subtract(date: Date, value: number, timeBase: TimeBaseEnum): Date {
        return moment(date).subtract(value, timeBase).toDate()
    },

    /** Retorna diferenca entre data informa e data atual, numa determinada unidade de tempo. */
    getTimeFromNow(date: Date, timeBase: TimeBaseEnum): number {
        return +moment().diff(moment(date), timeBase)
    },

    /** Retorna hora & minutos extraidos de 01 string que venha na forma [hora]:[minutos]. */
    getHourAndMinutes(timeString: string): { hour: number, minutes: number } {

        let timeArray: OrUndefT<[number, number]>
        if (/^((2[0-3])|([01]\d)):([0-5]\d)$/.test(timeString))
            timeArray = timeString.split(':').map(timeUnit => +timeUnit) as [number, number]

        return {
            hour: timeArray?.[0] ?? 0,
            minutes: timeArray?.[1] ?? 0,
        }
    },
}
