import * as _ from 'lodash'

import { ConfigTP } from './type/ConfigTP'
import { ArrayInputConfigTP } from './type/ArrayInputConfigTP'
import { DebugActiveTP } from './type/DebugActiveTP'

/**
 * Eliminador de valor transitorio:
 * Permite a captura do valor 'permanente' obtido apos 01 intervalo determinado evitando alteracoes transitorias indesejadas;
 *
 * - Modo 'normal': Captura-se o ultimo valor detectado que permanecer estavel pelo intervalo configurado;
 * - Modo 'invertido': captura-se 1o valor detectado que sera retornado apos intervalo configurado;
 * 
 * TODO: Publicar
 */
export class TransientValueTrimmer<InputTP, OutputTP = InputTP> {   // eslint-disable-line @typescript-eslint/naming-convention

    private value: InputTP
    private timeoutID: number

    private readonly onFinish: (definitiveValue: OutputTP) => void
    private readonly delay: number
    private readonly isReversed: boolean

    private readonly shouldDebugTransient: boolean
    private readonly shouldDebugPermanent: boolean
    private readonly debugNameTxt: string
    private readonly arrayInputConfig?: ArrayInputConfigTP

    constructor(config: ConfigTP<OutputTP>) {

        this.delay = config.delay
        this.onFinish = config.onFinish
        this.isReversed = !!config.isReversed
        this.arrayInputConfig = config.arrayInputConfig

        const debugType = config.debugType ?? 'disabled'

        this.debugNameTxt = !!config.debugName ? `::${config.debugName}` : ''
        this.shouldDebugTransient = ['transient', 'full'].includes(debugType)
        this.shouldDebugPermanent = ['permanent', 'full'].includes(debugType)
    }

    onChange(transientValue: InputTP): void {
        if (this.isReversed)
            this._onChangeReversed(transientValue)
        else
            this._onChangeNotReversed(transientValue)
    }

    private _onChangeReversed(transientValue: InputTP): void {

        if (this.shouldDebugTransient && this._valueHasChanged(transientValue))
            this._debugTransient(transientValue)

        if (!!this.timeoutID)
            return

        this.value = transientValue
        this._setTrimmerTimeout()
    }

    private _onChangeNotReversed(transientValue: InputTP): void {

        if (!this._valueHasChanged(transientValue))
            return

        if (!!this.timeoutID)
            clearTimeout(this.timeoutID)

        this.value = transientValue

        if (this.shouldDebugTransient)
            this._debugTransient(transientValue)

        this._setTrimmerTimeout()
    }

    private _valueHasChanged(newTempValue: InputTP): boolean {

        // Avalia entrada de valor simples
        if (!this.value)
            return true

        if (!this.arrayInputConfig)
            return !_.isEqual(newTempValue, this.value)

        // Avalia entrada de valores multiplos (array)
        if (!(newTempValue instanceof Array)) {
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

    private _getPermanentValue(): OutputTP {

        if (!this.arrayInputConfig || !this.arrayInputConfig.valuesToUse)
            return (this.value as unknown) as OutputTP

        if (this.arrayInputConfig.valuesToUse.length === 1)
            return this.value[this.arrayInputConfig.valuesToUse[0]]

        return _.get(this, '_value', [])
            .filter((value: any, index: number) => this.arrayInputConfig!.valuesToUse!.includes(index)) as OutputTP
    }

    private _debugTransient(transientValue: InputTP): void {
        const baseLogMsg = this._getDebugChangeMsg('transient')
        console.log(`${baseLogMsg} = `, transientValue) // eslint-disable-line no-console
    }

    private _debugPermanent(): void {
        const baseLogMsg = this._getDebugChangeMsg('permanent')
        console.log(`${baseLogMsg} | stored value: `, this.value, ' | output: ', this._getPermanentValue())    // eslint-disable-line no-console
    }

    private _getDebugChangeMsg(type: DebugActiveTP): string {
        const reversedSign = this.isReversed ? '(reversed)' : ''
        return `DEBUG | (${type}) ${reversedSign} TransientValueTrimmer${this.debugNameTxt}`
    }
}
