import { OrUndefT, HttpMethodEnum, MimeTypeEnum, HttpStatusEnum } from '@hjcostabr76/generics'

/**
 * Conjunto de informacoes usadas para identificar 01 requisicao durante os procedimentos de gestao da mesma.
 * @see useRequest
 */
export type UseRequestIdT = {
    id: string,
    cancellationCount: number,
}

/**
 * Propriedades de estado de 01 requisicao gerida pelo mecanismo de gestao de requisicoes http.
 * @see useRequest
 */
export type RequestStateT<ResDataT> = {

    isAwaiting: boolean,
    isSuccess: boolean,
    isCancelled: boolean,
    wasTried: boolean,

    method?: OrUndefT<HttpMethodEnum>,
    responseData?: OrUndefT<ResDataT>,
    responseType?: OrUndefT<MimeTypeEnum>,
    responseStatus?: OrUndefT<HttpStatusEnum>,
    error?: OrUndefT<any>,
}

/** Formato de 01 action para controle de estado do hook */
export type UseRequestActionT<ResDataT> = {
    type: 'start' | 'finish',
    payload?: Partial<RequestStateT<ResDataT>>,
}
