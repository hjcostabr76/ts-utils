/* eslint-disable no-shadow */

/**
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

/**
 * Valores para variavel de ambiente que determina ambiente de execucao da aplicacao.
 */
export enum EnvironmentEnum {
    DEV = 'development',
    TEST = 'testing',
    PRD = 'production',
    HOM = 'homologation',
}

/**
 * Lista metodos http utilizados na aplicacao.
 */
export enum HttpMethodEnum {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

/**
 * Status de retorno em requisicoes http utilizados na aplicacao.
 */
export enum HttpStatusEnum {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 409,
    INTERNAL_ERROR = 500,
}

/**
 * Determina idiomas utilizados na aplicacao.
 */
export enum LanguageEnum {
    PT_BR = 'pt-BR'
}

/**
 * Padroniza referencia a MIME-TYPES utilizados no sistema.
 */
export enum MimeTypeEnum {

    PDF = 'application/pdf',
    ZIP = 'application/zip',
    JSON = 'application/json',
    TEXT = 'text/plain',

    CSV_STANDARD = 'text/csv',
    CSV_ALTERNATIVE_1 = 'application/csv',
    CSV_ALTERNATIVE_2 = 'text/x-csv',
    CSV_ALTERNATIVE_3 = 'text/x-comma-separated-values',
    CSV_ALTERNATIVE_4 = 'text/comma-separated-values',
    CSV_MICROSOFT = 'application/vnd.ms-excel',
}

/**
 * Tipos de relacionamentos possiveis entre tabelas de BD.
 * NOTE: Manter esse formato nos valores do export enum para compatibilidade com mikro-orm
 */
export enum RelationshipTypeEnum {
    ONE_ONE = '1:1',
    ONE_MANY = '1:m',
    MANY_ONE = 'm:1',
    MANY_MANY = 'm:n',
}

/**
 * Define bases de tempo.
 * NOTE: Manter valores em lowercase para compatibilidade com moment.js!
 */
export enum TimeBaseEnum {
    MINUTE = 'minute',
    HOUR = 'hour',
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
}
/* eslint-enable no-shadow */
