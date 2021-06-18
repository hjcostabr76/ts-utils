import { HttpMethodEnum, MimeTypeEnum, OrUndefT, SystemUtils } from '@hjcostabr76/generics'

import axios, { AxiosRequestConfig, CancelToken, CancelTokenSource } from 'axios'

import { RequestMangerUtils } from './RequestMangerUtils'
import { RawResponseT, RequestConfigT, RequestHeaderT, RequestResponseT, ResponseErrorCustomActionT, ResponseHandlerT } from './reqmanager_types_public'

/**
 * MANAGER
 * Encapsula metodos para gestao de requisicoes http.
 */
export class RequestManager {

    static readonly CANCELLED_RESPONSE = '[cancelled-request]'

    private static readonly DEFAULT_RESPONSE_TYPE: RequestResponseT = 'json'

    private static responseHandler?: ResponseHandlerT
    private static reqIdsCount = 0
    private static cancellationTokenMap: Map<string, CancelTokenSource> = new Map() // [requestID] -> [token de cancelamento]
    private static readonly customErrorActions: ResponseErrorCustomActionT[] = []

    private static readonly defaultHeaders: RequestHeaderT[] = [
        {
            headerName: 'Content-Type',
            headerValue: MimeTypeEnum.JSON,
        },
        {
            headerName: 'Accept',
            headerValue: MimeTypeEnum.JSON,
        },
    ]

    static setResponseHandler(handler: ResponseHandlerT): void {
        this.responseHandler = handler
    }

    static async handleResponse<R = RawResponseT>(response: RawResponseT): Promise<R> {
        return this.responseHandler ? (this.responseHandler as ResponseHandlerT<R>)(response) : response as unknown as R
    }

    static getNewRequestId(): string {
        this.reqIdsCount++
        const idNumberString = `000${this.reqIdsCount}`.slice(-3)
        return `request-${idNumberString}`
    }

    static resetRequestCount(): void {
        this.reqIdsCount = 0
    }

    /**
     * Adiciona 01 action generica customizada para tratar erros de 01 determinado tipo (status http) em requisicoes.
     * Sera executada toda vez que ocorrer 01 erro do tipo especificado em alguma requisicao a menos que a requisicao sobrescreva essa acao individualmente.
     */
    static addErrorCustomAction(action: ResponseErrorCustomActionT): void {
        this.customErrorActions.push(action)
    }

    /** Adiciona 01 header customizado a ser incluido por padrao em toda requisicao. */
    static addDefaultHeader(headerName: string, headerValue: string): void {
        this.defaultHeaders.push({ headerName, headerValue })
    }

    static setDefaultBearerAuthToken(token: string): void {
        this.addDefaultHeader('Authorization', `Bearer ${token}`)
    }

    static async run<R = RawResponseT>(config: RequestConfigT<R>, id?: string): Promise<OrUndefT<R>>
    static async run<R = RawResponseT>(config: RequestConfigT<R>, enableCancellation: boolean, id?: string): Promise<OrUndefT<R>>
    static async run<R = RawResponseT>(config: RequestConfigT<R>, onCancel: () => void, id?: string): Promise<OrUndefT<R>>

    /** Executa 01 requisicao http generica parametrizada. */
    static async run<R = RawResponseT>(config: RequestConfigT<R>, param2?: string | (() => void) | boolean, id?: string): Promise<OrUndefT<R>> {

        // Define parametros
        const onCancel = (typeof param2 === 'function') ? param2 : undefined
        const enableCancellation = (param2 === true || !!onCancel || !!id)

        if (!id && typeof param2 === 'string')
            id = param2

        try {

            // Monta parametros da requisicao
            const requestParams: AxiosRequestConfig = {
                url: config.url,
                method: config.method,
                headers: this.getRequestHeaders(config),
                params: (config.method === HttpMethodEnum.GET) ? config.params : {},
                data: (config.method !== HttpMethodEnum.GET) ? config.params : {},
                responseType: config.responseType ?? this.DEFAULT_RESPONSE_TYPE,
            }

            if (enableCancellation) {
                id = id ?? this.getNewRequestId()
                requestParams.cancelToken = this.getCancelToken(id)
            }

            // Executa & retorna dados da requisicao
            const axiosResponse = await axios.request<R>(requestParams)
            const rawResponse = RequestMangerUtils.getRawResponseFromAxiosResponse<R>(axiosResponse)
            return await (config.responseHandler ? config.responseHandler(rawResponse) : this.handleResponse<R>(rawResponse))

        } catch (error) {

            if (!axios.isCancel(error))
                throw this.getErrorToThrow(error, config)

            onCancel?.()
            throw new Error(this.CANCELLED_RESPONSE)

        } finally {
            if (id)
                this.cancellationTokenMap.delete(id)
        }
    }

    /** Cancela 01 requisicao, identificada por seu ID, caso esteja em andamento. */
    static cancelRequest(requestId: string, logMessage?: string): void {
        this.cancellationTokenMap.get(requestId)?.cancel(logMessage ?? `Requisicao "${requestId}" cancelada...`)
    }

    /** Cancela todas as requisicoes que estiverem em andamento. */
    static cancelAllRequests(): void {
        this.cancellationTokenMap.forEach((cancelTokenSource, requestId) => this.cancelRequest(requestId))
    }

    /** Cancela todas as requisicoes que estiverem em andamento & reinicializa estado de controle de andamento de requisicoes, na classe. */
    static async reset(): Promise<void> {
        this.cancelAllRequests()
        await SystemUtils.sleep(this.cancellationTokenMap.size * 25)
        this.cancellationTokenMap = new Map()
    }

    /** Gera & retorna headers para envio de 01 requisicao. */
    private static getRequestHeaders(config: RequestConfigT): Record<string, string> {

        const headerLists = [this.defaultHeaders, (config.headers ?? [])]
        const hasNoAuth = config.noAuth ?? false
        const headers: Record<string, string> = {}

        for (const headersList of headerLists) {
            headersList.forEach(header => {
                if (!hasNoAuth || header.headerName !== 'Authorization')
                    headers[header.headerName] = header.headerValue
            })
        }

        return headers
    }

    /** Trata & retorna token para cancelamento de 01 requisicao. */
    private static getCancelToken(requestId: string): CancelToken {

        let cancelToken = this.cancellationTokenMap.get(requestId)

        if (!cancelToken) {
            cancelToken = axios.CancelToken.source()
            this.cancellationTokenMap.set(requestId, cancelToken)
        }

        return cancelToken.token
    }

    /** Avalia & trata 01 erro ocorrido durante 01 requisicao. Retorna falha a ser lancada ao fim da execucao. */
    private static getErrorToThrow(error: any, requestConfig: RequestConfigT): unknown {

        // Trata falha desconhecida
        const responseStatus = error.response?.status
        if (!responseStatus)
            return error

        // Trata falha identificada (com handler individual)
        const reqCustomAction = requestConfig?.httpStatusCustomAction
        if (reqCustomAction?.httpStatus === responseStatus) {
            reqCustomAction?.action(error)
            return error.response
        }

        // Trata falha identificada (com handler generico)
        for (const genericCustomAction of this.customErrorActions) {
            if (genericCustomAction.httpStatus === responseStatus) {
                genericCustomAction.action(error)
                break
            }
        }

        return error.response
    }
}
