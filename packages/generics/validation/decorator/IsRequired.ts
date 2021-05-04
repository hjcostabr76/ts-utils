import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

import { I18n } from '@system/i18n/I18n'
import { AnyObjTP } from '@system/type/AnyObjTP'
import { ValidationRulesErrMsgI18n } from '@system/validation/error-message/ValidationRulesErrMsgTP'

/**
 * DECORATOR de VALIDACAO:
 * Campo obrigatorio.
 */
export function IsRequired(validationOptions?: ValidationOptions) { // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjTP, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsRequiredValidator,
        })
    }
}

@ValidatorConstraint({ name: 'Required Field' })
class IsRequiredValidator implements ValidatorConstraintInterface { // eslint-disable-line @typescript-eslint/naming-convention

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return !!value
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<ValidationRulesErrMsgI18n>(ValidationRulesErrMsgI18n.CONTEXT, 'isRequired')
    }
    /* eslint-enable class-methods-use-this */
}
