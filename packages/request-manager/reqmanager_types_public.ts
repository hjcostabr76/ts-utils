import { HttpMethodEnum, HttpStatusEnum } from '@hjcostabr76/generics/enum'
import { AxiosResponse } from 'axios'

import { RequestStateT } from './reqmanager_types_private'

/** Define parametros para configurar 01 requisicao http executada atraves da 'gerenciadora de requisicoes'. */
export type RequestConfigT<ResDataT = any, ReqDataT = any> = {

    url: string,
    method: HttpMethodEnum,
    params?: ReqDataT,

    headers?: RequestHeaderT[],
    noAuth?: boolean, // eslint-disable-line @typescript-eslint/naming-convention
    httpStatusCustomAction?: ResponseErrorCustomActionT,

    responseType?: RequestResponseT,
    responseHandler?: ResponseHandlerT<ResDataT>,
}

/** Parametriza 01 header para requisicoes geridas pela RequestHelper. */
export type RequestHeaderT = {
    headerName: string,
    headerValue: string,
}

/** Define valores aceitos para parametro de configuracao de requisicoes 'responseType'. */
export type RequestResponseT = 'json' | 'blob' | 'arraybuffer' | 'document' | 'text' | 'stream'

/**
 * Parametros para configurar metodo de tratamento generico de retorno de requisicoes.
 * @see RequestUtils
 */
export type IsValidReqReturnConfigT = {
    request: RequestT<any>,
    errorMsg?: string,
    isVoidRequest?: boolean,
    failureLogMsg?: string,
    shouldReportFailure?: boolean,
    mustReport404?: boolean,
    mustReport403?: boolean,
    mustReport401?: boolean,
}

/**
 * Define mapa chave->valor para determinar 01 callback de tratamento especial para falhas em requisicoes http de 01 determinado status.
 * (usado na 'gerenciadora de requisicoes').
 */
export type ResponseErrorCustomActionT = {
    httpStatus: HttpStatusEnum,
    action: (response: RawResponseT) => void,
}

/**
 * Formato do objeto retornado pelo hook de gestao de requisicoes.
 * @see useRequest
 */
export type RequestT<ResDataT> = RequestStateT<ResDataT> & {
    runRequest: (config?: RequestConfigT) => void,
    cancelRequest: () => void,
}

/** * Assinatura de 01 funcao que manipula o resultado de uma requisicao http para gerar 01 resultado formatado de forma customizada */
export type ResponseHandlerT<R = any> = (response: RawResponseT) => Promise<R>

/** Resultado puro de 01 requicao http. */
export type RawResponseT<R = any> = Pick<AxiosResponse<R>, 'data' | 'status' | 'headers'>
