import * as _ from 'lodash'

import { tvt_ArrayInputConfigT, tvt_ConfigT, tvt_DebugActiveT } from './tvt_types'

/**
 * Eliminador de valor transitorio:
 * Permite a captura do valor 'permanente' obtido apos 01 intervalo determinado evitando alteracoes transitorias indesejadas;
 *
 * - Modo 'normal': Captura-se o ultimo valor detectado que permanecer estavel pelo intervalo configurado;
 * - Modo 'invertido': captura-se 1o valor detectado que sera retornado apos intervalo configurado;
 */
export class TransientValueTrimmer<InputT, OutputT = InputT> {

    private value: InputT
    private timeoutID: number

    private readonly onFinish: (definitiveValue: OutputT) => void
    private readonly delay: number
    private readonly isReversed: boolean

    private readonly shouldDebugTransient: boolean
    private readonly shouldDebugPermanent: boolean
    private readonly debugNameTxt: string
    private readonly arrayInputConfig?: tvt_ArrayInputConfigT

    constructor(config: tvt_ConfigT<OutputT>) {

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
            this._onChangeReversed(transientValue)
        else
            this._onChangeNotReversed(transientValue)
    }

    private _onChangeReversed(transientValue: InputT): void {

        if (this.shouldDebugTransient && this._valueHasChanged(transientValue))
            this._debugTransient(transientValue)

        if (this.timeoutID)
            return

        this.value = transientValue
        this._setTrimmerTimeout()
    }

    private _onChangeNotReversed(transientValue: InputT): void {

        if (!this._valueHasChanged(transientValue))
            return

        if (this.timeoutID)
            clearTimeout(this.timeoutID)

        this.value = transientValue

        if (this.shouldDebugTransient)
            this._debugTransient(transientValue)

        this._setTrimmerTimeout()
    }

    private _valueHasChanged(newTempValue: InputT): boolean {

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

        if (!this.arrayInputConfig.valuesToListen)
            return !_.isEqual(this.value, newTempValue)

        for (const indexToEvaluate of this.arrayInputConfig.valuesToListen) {
            if (!_.isEqual(this.value[indexToEvaluate], newTempValue[indexToEvaluate]))
                return true
        }

        return false
    }

    private _setTrimmerTimeout(): void {

        this.timeoutID = window.setTimeout(
            () => {

                if (this.shouldDebugPermanent)
                    this._debugPermanent()

                this.onFinish(this._getPermanentValue())
                this.timeoutID = 0
            },
            this.delay
        )
    }

    private _getPermanentValue(): OutputT {

        if (!this.arrayInputConfig || !this.arrayInputConfig.valuesToUse)
            return (this.value as unknown) as OutputT

        if (this.arrayInputConfig.valuesToUse.length === 1)
            return this.value[this.arrayInputConfig.valuesToUse[0]]

        return _.get(this, '_value', [])
            .filter((value: any, index: number) => this.arrayInputConfig!.valuesToUse!.includes(index)) as OutputT
    }

    private _debugTransient(transientValue: InputT): void {
        const baseLogMsg = this._getDebugChangeMsg('transient')
        console.log(`${baseLogMsg} = `, transientValue) // eslint-disable-line no-console
    }

    private _debugPermanent(): void {
        const baseLogMsg = this._getDebugChangeMsg('permanent')
        console.log(`${baseLogMsg} | stored value: `, this.value, ' | output: ', this._getPermanentValue())    // eslint-disable-line no-console
    }

    private _getDebugChangeMsg(type: tvt_DebugActiveT): string {
        const reversedSign = this.isReversed ? '(reversed)' : ''
        return `DEBUG | (${type}) ${reversedSign} TransientValueTrimmer${this.debugNameTxt}`
    }
}
