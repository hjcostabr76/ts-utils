import { OrUndefT } from '../type'
import { FullConfigT, GeneralHandlerT, NotificationConfigT } from './notifier_types'

const DEFAULT_CONFIG: Required<FullConfigT> = {
    type: 'warn',
    title: 'Warning',
    msg: 'Something happened...',
    duration: 500,
}

/**
 * Gerenciador global de notificoes.
 */
export class Notifier {

    private static generalHandler: OrUndefT<GeneralHandlerT>

    static setGeneralHandler(handler: GeneralHandlerT): void {
        this.generalHandler = handler
    }

    static warn(title: string, message: string, duration?: number): void
    static warn(config: NotificationConfigT): void

    static warn(param1: NotificationConfigT | string, msg?: string, duration?: number): void {

        let config: NotificationConfigT

        if (typeof param1 === 'object')
            config = param1

        else {
            config = {
                title: param1,
                msg: msg as string,
                duration: duration as number
            }
        }

        Notifier.notify({ ...config, type: 'warn' })
    }

    /* eslint-disable @typescript-eslint/naming-convention */
    static error(title: string, message: string, duration?: number): void
    static error(config: NotificationConfigT): void

    static error(param1: NotificationConfigT | string, msg?: string, duration?: number): void {
    /* eslint-enable @typescript-eslint/naming-convention */

        let config: NotificationConfigT

        if (typeof param1 === 'object')
            config = param1

        else {
            config = {
                title: param1,
                msg: msg as string,
                duration: duration as number
            }
        }

        Notifier.notify({ ...config, type: 'error' })
    }

    /* eslint-disable @typescript-eslint/naming-convention */
    static success(title: string, message: string, duration?: number): void
    static success(config: NotificationConfigT): void

    static success(param1: NotificationConfigT | string, msg?: string, duration?: number): void {
    /* eslint-enable @typescript-eslint/naming-convention */

        let config: NotificationConfigT

        if (typeof param1 === 'object')
            config = param1

        else {
            config = {
                title: param1,
                msg: msg as string,
                duration: duration as number
            }
        }

        Notifier.notify({ ...config, type: 'success' })
    }

    private static notify(config: Partial<FullConfigT>): void {

        const completeConfig: Required<FullConfigT> = { ...DEFAULT_CONFIG, ...config }

        if (this.generalHandler)
            return this.generalHandler(completeConfig)

        const message = `${completeConfig.title} - ${completeConfig.msg} [${completeConfig.duration}]`
        window.alert(message) // eslint-disable-line no-alert

        /* eslint-disable no-console */
        switch (completeConfig.type) {
            case 'warn':
                console.warn(message)
                break
            case 'error':
                console.error(message)
                break
            case 'success':
            default:
                console.info(message)
                break
        }
        /* eslint-enable no-console */
    }
}
