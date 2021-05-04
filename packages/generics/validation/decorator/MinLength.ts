import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

import { I18n } from '@system/i18n/I18n'
import { AnyObjTP } from '@system/type/AnyObjTP'
import { ValidationRulesErrMsgI18n } from '@system/validation/error-message/ValidationRulesErrMsgTP'

/**
 * DECORATOR de VALIDACAO:
 * Comprimento minimo.
 */
export function MinLength(validationOptions?: ValidationOptions) {  // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjTP, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: (typeof validationOptions === 'number') ? [validationOptions] : [],
            validator: MinLengthValidator
        })
    }
}

@ValidatorConstraint({ name: 'Must have length greater than or equal to value' })
class MinLengthValidator implements ValidatorConstraintInterface {  // eslint-disable-line @typescript-eslint/naming-convention

    /* eslint-disable class-methods-use-this */
    validate(value: unknown, args: ValidationArguments): boolean {
        return (typeof args.constraints[0] === 'number' && (value as any[])?.length >= args.constraints[0])
    }

    defaultMessage(args: ValidationArguments): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<ValidationRulesErrMsgI18n>(ValidationRulesErrMsgI18n.CONTEXT, 'minLength')
            .replace('#', args.constraints[0])
    }
    /* eslint-enable class-methods-use-this */
}
