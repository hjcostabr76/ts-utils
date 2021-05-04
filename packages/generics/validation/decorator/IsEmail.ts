import classValidator, { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

import { I18n } from '@system/i18n/I18n'
import { AnyObjTP } from '@system/type/AnyObjTP'
import { ValidationRulesErrMsgI18n } from '@system/validation/error-message/ValidationRulesErrMsgTP'

/**
 * DECORATOR de VALIDACAO: e-mail
 */
export function IsEmail(validationOptions?: ValidationOptions) {    // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjTP, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailValidator
        })
    }
}

@ValidatorConstraint({ name: 'Must be an e-mail' })
class IsEmailValidator implements ValidatorConstraintInterface {    // eslint-disable-line @typescript-eslint/naming-convention

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return classValidator.isEmail(value)
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<ValidationRulesErrMsgI18n>(ValidationRulesErrMsgI18n.CONTEXT, 'isEmail')
    }
    /* eslint-enable class-methods-use-this */
}
