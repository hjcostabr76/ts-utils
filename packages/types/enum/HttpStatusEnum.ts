/**
 * ENUM
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
