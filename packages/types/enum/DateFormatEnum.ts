/**
 * ENUM
 * Determina formatos de data utilizados na aplicacao.
 */
export enum DateFormatEnum {

    BR = 'DD/MM/YYYY',
    BR_DATE_TIME_H_M = 'DD/MM/YYYY HH:mm',
    BR_WITH_TIME_H_M_S = 'DD/MM/YYYY HH:mm:ss',

    BR_D_M = 'DD/MM',
    BR_MM_Y = 'MM/YYYY',
    BR_MMM_Y = 'MMM/YYYY',

    US = 'YYYY-MM-DD',
    US_DATE_TIME_H_M = 'YYYY-MM-DD - HH:mm',
    US_DATE_TIME_H_M_S = 'YY-MM-DD HH:mm:ss',

    TIME_H_M = 'HH:mm',
    TIME_H_M_S = 'HH:mm:ss',
    YEAR_4 = 'YYYY',
}
