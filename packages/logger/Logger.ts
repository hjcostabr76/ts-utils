import { DateFormatEnum, InvalidArgsError, OrUndefT, DateUtils } from '@hjcostabr76/generics'
import * as colors from 'colors'

import { ILogger, LogLevelT } from './log_abstract'

/**
 * LOGGER
 * Centraliza emissao de logs da aplicacao.
 */
export class Logger implements ILogger {

    private static instances?: Map<OrUndefT<string>, Logger>

    private readonly context?: string

    private constructor(context?: string) {
        this.context = context
    }

    static getInstance(context?: string): Logger {

        if (!this.instances)
            this.instances = new Map<OrUndefT<string>, Logger>()

        if (!this.instances.get(context))
            this.instances.set(context, new Logger(context))

        return this.instances.get(context) as Logger
    }

    static info(...logs: any[]): void {
        Logger.infoWithContext(undefined, ...logs)
    }

    static warn(...logs: any[]): void {
        Logger.warnWithContext(undefined, ...logs)
    }

    static error(...logs: any[]): void {
        Logger.errorWithContext(undefined, ...logs)
    }

    static divider(times = 2): void {
        for (let i = 0; i < times; i++)
            Logger.executeLogging(['\n'])
    }

    info(...logs: any[]): void {
        Logger.infoWithContext(this.context, ...logs)
    }

    warn(...logs: any[]): void {
        Logger.warnWithContext(this.context, ...logs)
    }

    error(...logs: any[]): void {
        Logger.errorWithContext(this.context, ...logs)
    }

    divider(times?: number): void { // eslint-disable-line class-methods-use-this
        Logger.divider(times)
    }

    private static infoWithContext(context?: string, ...logs: any[]): void {
        Logger.logWithContext('info', context, ...logs)
    }

    private static warnWithContext(context?: string, ...logs: any[]): void {
        Logger.logWithContext('warn', context, ...logs)
    }

    private static errorWithContext(context?: string, ...logs: any[]): void {
        Logger.logWithContext('error', context, ...logs)
    }

    private static logWithContext(level: LogLevelT, context?: string, ...logs: any[]): void {

        let logFunction: Function
        let colorFunction: (input: string) => string

        switch (level) {
            case 'info':
                logFunction = console.log   // eslint-disable-line no-console
                colorFunction = colors.green
                break

            case 'warn':
                logFunction = console.warn  // eslint-disable-line no-console
                colorFunction = colors.yellow
                break

            case 'error':
                logFunction = console.error // eslint-disable-line no-console
                colorFunction = colors.red
                break

            default:
                throw new InvalidArgsError('LogLevel invalido')
        }

        const logPrefixes: string[] = [
            colorFunction(`[${level.toUpperCase()}]`),
            colors.green(`[${DateUtils.getFormatted(new Date(), DateFormatEnum.US_DATE_TIME_H_M_S)}]`)?.dim as string,
        ]

        if (context)
            logPrefixes.push(colors.gray(`[${context}]`))

        this.executeLogging(
            [
                ...logPrefixes,
                ...logs.map(log => colorFunction(log))
            ],
            logFunction
        )
    }

    private static executeLogging(logs: any[], logFunction?: Function): void {
        logFunction = logFunction ?? console.log // eslint-disable-line no-console
        logFunction(...logs)
    }
}
