import { MimeTypeEnum, OrUndefT } from '@hjcostabr76/generics'

import { RequestManager } from '../RequestManager'
import { RequestStateT, UseRequestActionT, UseRequestIdT } from '../reqmanager_types_private'
import { RawResponseT } from '../reqmanager_types_public'

/**
 * Classe auxiliar para o HOOK de gestao de requisicoes.
 * @see useRequest
 */
export class UseRequestHelper {

    private static readonly DEFAULT_STATE: RequestStateT<any> = {
        isCancelled: false,
        isAwaiting: false,
        isSuccess: false,
        wasTried: true,
    }

    static readonly INITIAL_STATE: RequestStateT<any> = { // eslint-disable-line @typescript-eslint/member-ordering
        ...UseRequestHelper.DEFAULT_STATE,
        wasTried: false,
    }

    static getInitialId(): UseRequestIdT {
        return {
            id: RequestManager.getNewRequestId(),
            cancellationCount: 0
        }
    }

    /**
     * Retorna ID 'dinamico' da requisicao:
     *
     * - Toda requisicao gerida pelo hook possui 01 'id inicial' que correponde ao 1o ID obtido para indetifica-la;
     * - Cada possivel cancelamento da mesma invalida seu identificador atual tornando necessario que se gere 01 novo;
     * - Cada cancelamento incrementa o contador de cancelamentos;
     * - O id dinamico corresponde a 01 identificador que se atualiza para ser sempre o 'mesmo' (paro o hook) & 01 novo (para a helper), ao mesmo tempo;
     *
     * @see RequestHelper
     */
    static getIdString(identification: UseRequestIdT, debugId?: string): string {
        const id = debugId ?? identification.id
        return identification.cancellationCount ? `${id}.${identification.cancellationCount + 1}` : id
    }

    static requestStateReducer(state: RequestStateT<any>, action: UseRequestActionT<any>): RequestStateT<any> { // eslint-disable-line @typescript-eslint/naming-convention
        switch (action.type) {
            case 'start':
                return {
                    ...UseRequestHelper.DEFAULT_STATE,
                    method: action.payload?.method,
                    isAwaiting: true,
                }
            case 'finish':
                return {
                    ...UseRequestHelper.DEFAULT_STATE,
                    ...action.payload,
                    isAwaiting: false,
                }
            default:
                return UseRequestHelper.DEFAULT_STATE
        }
    }

    static requestIdReducer(currentState: UseRequestIdT): UseRequestIdT { // eslint-disable-line @typescript-eslint/naming-convention
        return {
            ...currentState,
            cancellationCount: (currentState.cancellationCount + 1)
        }
    }

    static validateResponse(response?: RawResponseT): void {
        if (!response?.status || response?.status < 200 || response?.status >= 300)
            throw response
    }

    static getResponseContentType(responseHeaders: Record<string, string>): OrUndefT<MimeTypeEnum> {

        const responseTypeString: OrUndefT<string> = responseHeaders['content-type'] ?? responseHeaders['content-segmentType']
        if (!responseTypeString)
            return

        for (const mimeType of Object.values(MimeTypeEnum)) {
            if (responseTypeString.includes(mimeType))
                return mimeType
        }
    }
}
