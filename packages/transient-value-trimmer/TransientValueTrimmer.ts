import * as _ from 'lodash'

import { tvtArrayInputConfigT, tvtConfigT, tvtDebugActiveT } from './tvtTypes'

/**
 * Eliminador de valor transitorio:
 * Permite a captura do valor 'permanente' obtido apos 01 intervalo determinado evitando alteracoes transitorias indesejadas;
 *
 * - Modo 'normal': Captura-se o ultimo valor detectado que permanecer estavel pelo intervalo configurado;
 * - Modo 'invertido': captura-se 1o valor detectado que sera retornado apos intervalo configurado;
 */
export class TransientValueTrimmer<InputT, OutputT = InputT> {

    private value?: InputT
    private timeoutID?: number

    private readonly onFinish: (definitiveValue: OutputT) => void
    private readonly delay: number
    private readonly isReversed: boolean

    private readonly shouldDebugTransient: boolean
    private readonly shouldDebugPermanent: boolean
    private readonly debugNameTxt: string
    private readonly arrayInputConfig?: tvtArrayInputConfigT

    constructor(config: tvtConfigT<OutputT>) {

        this.delay = config.delay
        this.onFinish = config.onFinish
        this.isReversed = !!config.isReversed
        this.arrayInputConfig = config.arrayInputConfig

        const debugType = config.debugType ?? 'disabled'

        this.debugNameTxt = config.debugName ? `::${config.debugName}` : ''
        this.shouldDebugTransient = ['transient', 'full'].includes(debugType)
        this.shouldDebugPermanent = ['permanent', 'full'].includes(debugType)
    }

    onChange(transientValue: InputT): void {
        if (this.isReversed)
            this.onChangeReversed(transientValue)
        else
            this.onChangeNotReversed(transientValue)
    }

    private onChangeReversed(transientValue: InputT): void {

        if (this.shouldDebugTransient && this.hasValueChanged(transientValue))
            this.debugTransient(transientValue)

        if (this.timeoutID)
            return

        this.value = transientValue
        this.setTrimmerTimeout()
    }

    private onChangeNotReversed(transientValue: InputT): void {

        if (!this.hasValueChanged(transientValue))
            return

        if (this.timeoutID)
            clearTimeout(this.timeoutID)

        this.value = transientValue

        if (this.shouldDebugTransient)
            this.debugTransient(transientValue)

        this.setTrimmerTimeout()
    }

    private hasValueChanged(newTempValue: InputT): boolean {

        // Avalia entrada de valor simples
        if (!this.value)
            return true

        if (!this.arrayInputConfig)
            return !_.isEqual(newTempValue, this.value)

        // Avalia entrada de valores multiplos (array)
        if (!(Array.isArray(newTempValue))) {
            throw {
                message: 'FALHA - TransientValueTrimmer._valueHasChanged: Valor de entrada invalido!',
                value: newTempValue
            }
        }

        if (!this.arrayInputConfig.valuesToListenList)
            return !_.isEqual(this.value, newTempValue)

        for (const indexToEvaluate of this.arrayInputConfig.valuesToListenList) {
            if (!_.isEqual(this.value[indexToEvaluate], newTempValue[indexToEvaluate]))
                return true
        }

        return false
    }

    private setTrimmerTimeout(): void {

        this.timeoutID = window.setTimeout(
            () => {

                if (this.shouldDebugPermanent)
                    this.debugPermanent()

                this.onFinish(this.getPermanentValue())
                this.timeoutID = 0
            },
            this.delay
        )
    }

    /**
     * FIXME: 2021-05-06 - Corrigir este metodo
     */
    private getPermanentValue(): OutputT {

        if (!this.arrayInputConfig || !this.arrayInputConfig.valuesToUseList)
            return (this.value as unknown) as OutputT

        if (this.arrayInputConfig.valuesToUseList.length === 1)
            return this.value[this.arrayInputConfig.valuesToUseList[0]]

        const valueAsArray = this.value ?? []

        if (!Array.isArray(this.value))
            throw new Error('Valor inválido para "value"')

        return (valueAsArray as any[])
            .filter((value: any, index: number) => this.arrayInputConfig.valuesToUseList!.includes(index)) as OutputT
    }

    private debugTransient(transientValue: InputT): void {
        const baseLogMsg = this.getDebugChangeMsg('transient')
        console.log(`${baseLogMsg} = `, transientValue) // eslint-disable-line no-console
    }

    private debugPermanent(): void {
        const baseLogMsg = this.getDebugChangeMsg('permanent')
        console.log(`${baseLogMsg} | stored value: `, this.value, ' | output: ', this.getPermanentValue())    // eslint-disable-line no-console
    }

    private getDebugChangeMsg(type: tvtDebugActiveT): string {
        const reversedSign = this.isReversed ? '(reversed)' : ''
        return `DEBUG | (${type}) ${reversedSign} TransientValueTrimmer${this.debugNameTxt}`
    }
}
