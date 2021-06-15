import { AxiosResponse } from 'axios'

import { RawResponseT } from './reqmanager_types_public'

/**
 * Utilitrios internos do pacote
 * NOTE: Este arquivo NAO DEVE ser exportado no pacote
 */
export const RequestMangerUtils = {
    getRawResponseFromAxiosResponse<R = any>(axiosResponse: AxiosResponse<R>): RawResponseT<R> {
        return {
            data: axiosResponse.data,
            status: axiosResponse.status,
            headers: axiosResponse.headers as Record<string, string>
        }
    }
}
