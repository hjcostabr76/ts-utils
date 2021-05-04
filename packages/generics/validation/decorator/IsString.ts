import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

import { I18n } from '@system/i18n/I18n'
import { AnyObjTP } from '@system/type/AnyObjTP'
import { ValidationRulesErrMsgI18n } from '@system/validation/error-message/ValidationRulesErrMsgTP'

/**
 * DECORATOR de VALIDACAO:
 * Tipo deve ser string.
 */
export function IsString(validationOptions?: ValidationOptions) {   // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjTP, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsStringValidator,
        })
    }
}

@ValidatorConstraint({ name: 'Must be a string' })
class IsStringValidator implements ValidatorConstraintInterface {   // eslint-disable-line @typescript-eslint/naming-convention

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return (typeof value === 'string')
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<ValidationRulesErrMsgI18n>(ValidationRulesErrMsgI18n.CONTEXT, 'isString')
    }
    /* eslint-enable class-methods-use-this */
}
