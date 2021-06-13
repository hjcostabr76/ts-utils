import _ from 'lodash'
import { Reducer, useEffect, useReducer, useState } from 'react'

import { RequestManager } from '../RequestManager'
import { RawResponseT, RequestConfigT, RequestStateT, RequestT, UseRequestActionT, UseRequestIdT } from '../reqmanager_types_public'
import { UseRequestDebuggingUtils } from './UseRequestDebuggingUtils'
import { UseRequestHelper } from './UseRequestHelper'

type RequestIdReducerT = Reducer<UseRequestIdT, void>
type RequestStateReducerT<ResDataT> = Reducer<RequestStateT<ResDataT>, UseRequestActionT<ResDataT>>

/**
 * HOOK
 * Encapsula gestao de 01 requisicao HTTP generica:
 * Pensado prioritariamente para tratar requisicoes a api(s) nerit.
 *
 * TODO: Rabilitar regra desativada
 * TODO: Rabilitar Checar metodo de habilitacao de debug
 *
 * @see IApiReturn
 */
export function useRequest<ResDataT>(initialConfig?: RequestConfigT, debugMode?: 'by-id' | 'all', debugId?: string): RequestT<ResDataT> { // eslint-disable-line max-lines-per-function

    const [id, incrementCancellationCount] = useReducer<RequestIdReducerT>(UseRequestHelper.requestIdReducer, UseRequestHelper.getInitialId())
    const [requestState, dispatch] = useReducer<RequestStateReducerT<ResDataT>>(UseRequestHelper.requestStateReducer, UseRequestHelper.INITIAL_STATE)

    const [mustRun, setMustRun] = useState<boolean>(false)
    const [requestConfig, setRequestConfig] = useState<RequestConfigT>()

    useEffect(onRunningStateChange, [mustRun, requestState.isAwaiting])

    const enableDebug = (debugMode === 'all' || (debugMode === 'by-id' && !!debugId))

    function onRunningStateChange(): void {

        if (enableDebug)
            UseRequestDebuggingUtils.computeCalling(onRunningStateChange.name, id, debugId)

        if (!mustRun)
            return

        if (requestState.isAwaiting)
            cancelRequest()
        else
            runRequest()
    }

    function askForNewExecution(config?: RequestConfigT): void {

        // Validar config da requisicao
        config = Object.assign(initialConfig, config)
        if (!config?.url || !config?.method)
            throw new Error('Invalid request parametrization')

        // 'Encomendar' 01 nova execucao
        if (enableDebug)
            UseRequestDebuggingUtils.computeCalling(askForNewExecution.name, id, debugId)

        setRequestConfig(config)
        setMustRun(true)
    }

    /**
     * TODO: 2021-06-12 - Checar isso aqui
     */
    async function runRequest(): Promise<void> {

        if (!requestConfig)
            return

        onWillStart()

        if (enableDebug)
            UseRequestDebuggingUtils.computeCalling(runRequest.name, id, debugId)

        try {

            const config: RequestConfigT = { ...requestConfig }
            delete config.responseHandler

            const response = await RequestManager.run(requestConfig, UseRequestHelper.getIdString(id))
            UseRequestHelper.validateResponse(response)
            await onIsSuccess(response)

        } catch (error) {

            if (error === RequestManager.CANCELLED_RESPONSE)
                onIsCancelled()
            else
                onIsFailure(error)
        }
    }

    function cancelRequest(): void {
        if (enableDebug)
            UseRequestDebuggingUtils.computeCalling(cancelRequest.name, id, debugId)
        RequestManager.cancelRequest(UseRequestHelper.getIdString(id))
    }

    async function onIsSuccess(response: RawResponseT): Promise<void> {

        if (enableDebug)
            UseRequestDebuggingUtils.computeCalling(onIsSuccess.name, id, debugId)

        onWillFinish({
            isSuccess: true,
            responseStatus: response.status,
            responseType: UseRequestHelper.getResponseContentType(response.headers),
            responseData: requestConfig?.responseHandler
                ? await requestConfig.responseHandler(response)
                : await RequestManager.handleResponse<ResDataT>(response)
        })
    }

    function onIsFailure(error: any): void {

        if (enableDebug)
            UseRequestDebuggingUtils.computeCalling(onIsFailure.name, id, debugId)

        onWillFinish({
            responseType: UseRequestHelper.getResponseContentType(error?.headers ?? {}),
            responseStatus: error?.status,
            error: error?.data ?? error,
        })
    }

    function onIsCancelled(): void {
        if (enableDebug)
            UseRequestDebuggingUtils.computeCalling(onIsCancelled.name, id, debugId)
        incrementCancellationCount()
        onWillFinish({ isCancelled: true })
    }

    function onWillStart(): void {
        if (enableDebug)
            UseRequestDebuggingUtils.start(id, debugId)
        dispatch({ type: 'start', payload: { method: requestConfig?.method }})
        setMustRun(false)
    }

    function onWillFinish(finalState: Partial<RequestStateT<ResDataT>>): void {

        if (enableDebug) {
            UseRequestDebuggingUtils.computeCalling(onWillFinish.name, id, debugId)
            UseRequestDebuggingUtils.end(id, debugId)
        }

        const isSuccess = !!finalState.isSuccess && !finalState.isCancelled

        dispatch({
            type: 'finish',
            payload: {
                ...finalState,
                isSuccess,
                responseData: isSuccess ? finalState.responseData : undefined,
                error: !isSuccess ? finalState.error : undefined,
            }
        })
    }

    return {
        runRequest: _.debounce(askForNewExecution, 150),
        cancelRequest,
        ...requestState
    }
}
