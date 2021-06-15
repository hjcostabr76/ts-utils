import { HttpStatusEnum, Notifier } from '@hjcostabr76/generics'

import { IsValidReqReturnConfigT, RequestT } from './reqmanager_types_public'

type RequestAssistParamsT = {
    request: RequestT<any>,
    config?: IsValidReqReturnConfigT | undefined,
}

/**
 * UTILITARIOS para lidar com requisicoes http realizadas utilizando as funcoes do modulo 'requests helpers'.
 */
export class RequestUtils {

    /** Exibe mensagem de notificacao de falha em requisicao determinada via procedimento generico. */
    static showDefaultErrorNotification(error: any, defaultMsg: string, notificationTitle = 'Ops!'): void {
        const apiErrorMsg = error?.data?.message
        const errorMsg = (typeof apiErrorMsg === 'string') ? apiErrorMsg : defaultMsg
        Notifier.error(notificationTitle, errorMsg)
    }

    /** Determina se execucao de 01 requisicao foi concluida. */
    static isRequestConcluded(request: RequestT<any>): boolean {
        return request.wasTried && !request.isAwaiting
    }

    /** Avalia 01 requisicao & determina se foi bem sucedida. */
    static isRequestSuccess(request: RequestT<any>, isVoidRequest = false): boolean {
        return this.isRequestConcluded(request) && request.isSuccess && (isVoidRequest || !!request.responseData)
    }

    /** Avalia 01 requisicao & determina se houve erro durante a execucao (cancelamento nao eh considerado erro). */
    static isRequestError(request: RequestT<any>, isVoidRequest?: boolean): boolean {
        return this.isRequestConcluded(request) && !this.isRequestSuccess(request, isVoidRequest) && !request.isCancelled
    }

    static handleError(request: RequestT<any>, defaultMsg: string): void
    static handleError(config: IsValidReqReturnConfigT, defaultMsg?: string): void

    /** Executa tratamento padrao para erro em requisicoes. */
    static handleError(param1: RequestT<any> | IsValidReqReturnConfigT, defaultMsg?: string): void {

        const params = this.getRequestAssistParams(param1)
        const errorMsg = params.config?.errorMsg ?? defaultMsg

        const failureLogMsg = params.config?.failureLogMsg ?? errorMsg
        if (failureLogMsg)
            console.error(failureLogMsg, params.request.responseData, params.request.error) // eslint-disable-line no-console

        if (!!errorMsg && this.shouldReportFailure(params.config, params.request.responseStatus))
            RequestUtils.showDefaultErrorNotification(params.request.error, errorMsg)
    }

    static isValidRequestReturn(config: IsValidReqReturnConfigT): boolean;
    static isValidRequestReturn(request: RequestT<any>, errorMsg?: string, isVoidRequest?: boolean): boolean;

    /**
     * Valida o retorno de uma requisicao para os casos mais comuns.
     *
     * Falhas do tipo 401 (nao autorizado), 403 (acesso proibido) & 404 (nao encontrada), por padrao,
     * nao emitem notificacao de falha porque:
     *
     * - 401: Preve logout automatico de usuario (que deve ser tratado em outro lugar);
     * - 403: Preve redirecionamento de tela (que deve ser tratado em outro lugar);
     * - 404: Nem sempre representa erro de execucao;
     */
    static isValidRequestReturn(param1: RequestT<any> | IsValidReqReturnConfigT, errorMsg?: string, isVoidRequest = false): boolean {

        const params = this.getRequestAssistParams(param1)

        if (!this.isRequestConcluded(params.request))
            return false

        if (this.isRequestSuccess(params.request, isVoidRequest))
            return true

        if (this.isRequestError(params.request, isVoidRequest))
            this.handleError(params, errorMsg)

        return false
    }

    /**
     * Determina se o metodo de tratamento generico de retorno de requisicoes deve emitir notificacoes
     * em caso de falha.
     */
    private static shouldReportFailure(config?: IsValidReqReturnConfigT, status?: HttpStatusEnum): boolean {

        if (config?.shouldReportFailure === false)
            return false

        switch (status) {
            case HttpStatusEnum.UNAUTHORIZED:
                return !!config?.mustReport401
            case HttpStatusEnum.FORBIDDEN:
                return !!config?.mustReport403
            case HttpStatusEnum.NOT_FOUND:
                return !!config?.mustReport404
            default:
                return true
        }
    }

    private static getRequestAssistParams(param: RequestT<any> | IsValidReqReturnConfigT): RequestAssistParamsT {
        const config = (param as IsValidReqReturnConfigT)?.request ? param as IsValidReqReturnConfigT : undefined
        const request = config?.request ?? param as RequestT<any>
        return { config, request }
    }
}
