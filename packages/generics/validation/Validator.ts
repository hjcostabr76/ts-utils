import { validate, ValidationError } from 'class-validator'

import { AnyObjT, OrUndefT } from '../type'
import { ValidationMsgUS } from './validation_msg_en'
import { ValidationErrorT, ValidationMsgT } from './validation_types'

/**
 * Wrapper que executa efetivamente as validacoes.
 */
export class Validator {

    private static defaultMsgs?: ValidationMsgT

    static setDefaultValidationMessages(i18nConfig: ValidationMsgT): void {
        this.defaultMsgs = i18nConfig
    }

    static getErrorMessage(validationType: keyof ValidationMsgT): string {
        return this.defaultMsgs?.[validationType] ?? ValidationMsgUS[validationType]
    }

    static async validate(object: AnyObjT, shouldThrowOnError = true): Promise<OrUndefT<ValidationErrorT[]>> {

        const errors = await validate(object)
        if (!errors.length)
            return

        const validationErrors = errors.map<ValidationErrorT>(error => Validator.getParsedError(error))
        if (!shouldThrowOnError)
            return validationErrors

        throw validationErrors
    }

    private static getParsedError(error: ValidationError): ValidationErrorT {

        return {
            target: error.target as OrUndefT<AnyObjT>,
            property: error.property,
            failedValue: error.value,
            failedTests: error.constraints as Record<keyof ValidationMsgT, string>,
            nestedErrors: error.children?.map(nestedError => Validator.getParsedError(nestedError)),
        }
    }
}
