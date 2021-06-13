/**
 * LOGGING
 * Define interface de 01 classe que implemente a funcao de logger.
 */
export interface ILogger {
    info: (...message: any[]) => void
    warn: (...message: any[]) => void
    error: (...message: any[]) => void
}
