import { LogLevelT } from '../type'

/** Parametros para emmitir uma notificacao generica. */
export type NotificationConfigT = {
    msg: string,
    title?: string,
    duration?: number,
}

/** Parametros para emmitir uma notificacao generica de um tipo especifico. */
export type FullConfigT = NotificationConfigT & { type: LogLevelT | 'success' }

/** Assinatura de 01 metodo para sobrescrever o handler generico de emissao de notificacoes. */
export type GeneralHandlerT = (config: FullConfigT) => void
