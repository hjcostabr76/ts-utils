import { DateFormatEnum, OrUndefTP, TimeBaseEnum, TimezoneEnum } from '@hjcostabr76/types'
import * as moment from 'moment-timezone'

import { DefaultsCFG } from '../config/DefaultsCFG'

/**
 * UTILS
 * Reune funcoes utilitarias para manipular datas.
 */
export class DateUtils {

    private static defaultTimezone = DefaultsCFG.timezone

    private constructor() {}

    static setDefaultTimezone(timezone: TimezoneEnum): void {
        this.defaultTimezone = timezone
    }

    /** Retorna uma instancia de Data de acordo com valor, formato e timezone passados. */
    static fixTimeZone(date: Date | string, format: DateFormatEnum = DateFormatEnum.US, timezone?: TimezoneEnum): OrUndefTP<Date> {
        return moment(moment.tz(date, timezone ?? this.defaultTimezone).format(format)).toDate()
    }

    /** Troca a hora da data 1 para a data 2. */
    static mergeHour(date1: Date, date2: Date): Date {
        const newDate = new Date()
        newDate.setTime(date1.getTime())
        newDate.setHours(date2.getHours(), date2.getMinutes(), date2.getSeconds())
        return newDate
    }

    /** Retorna uma data formatada conforme formatacao determina via parametro. */
    static getFormatted(date: string | Date, format: DateFormatEnum): string {
        return moment(date).format(format)
    }

    /** Transforma string data. */
    static toDate(dateString: string, dateStringFormat: DateFormatEnum): Date { // eslint-disable-line @typescript-eslint/naming-convention
        return moment(dateString, dateStringFormat).toDate()
    }

    /** Valida 01 string quanto a representar 01 data valida (formato americano). */
    static isValidUSADateString(dateString: string): boolean {
        try {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString))
                return false
            return moment(dateString, DateFormatEnum.US).isValid()

        } catch (error) {
            return false
        }
    }

    /** Define HORAS & MINUTOS de 01 data. */
    static setTime(date: Date, hours: number, minutes: number): Date {
        return moment(date)
            .set(TimeBaseEnum.HOUR, hours)
            .set(TimeBaseEnum.MINUTE, minutes)
            .toDate()
    }

    /** Obtem hora:minuros do horario de uma data. */
    static getTimeString(date: Date): string {

        const hour = `${moment(date).get(TimeBaseEnum.HOUR)}`.padStart(2, '0')
        const minute = `${moment(date).get(TimeBaseEnum.MINUTE)}`.padStart(2, '0')

        return `${hour}:${minute}`
    }

    /** SOMA valor de tempo a 01 data. */
    static add(date: Date, value: number, timeBase: TimeBaseEnum): Date {
        return moment(date).add(value, timeBase).toDate()
    }

    /** SUBTRAI valor de tempo a 01 data. */
    static subtract(date: Date, value: number, timeBase: TimeBaseEnum): Date {
        return moment(date).subtract(value, timeBase).toDate()
    }

    /** Retorna diferenca entre data informa e data atual, numa determinada unidade de tempo. */
    static getTimeFromNow(date: Date, timeBase: TimeBaseEnum): number {
        return +moment().diff(moment(date), timeBase)
    }

    /** Retorna hora & minutos extraidos de 01 string que venha na forma [hora]:[minutos]. */
    static getHourAndMinutes(timeString: string): { hour: number, minutes: number } {

        let timeArray: OrUndefTP<[number, number]>
        if (/^((2[0-3])|([01]\d)):([0-5]\d)$/.test(timeString))
            timeArray = timeString.split(':').map(timeUnit => +timeUnit) as [number, number]

        return {
            hour: timeArray?.[0] ?? 0,
            minutes: timeArray?.[1] ?? 0,
        }
    }
}
