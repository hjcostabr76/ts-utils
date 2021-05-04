import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

import { I18n } from '@system/i18n/I18n'
import { AnyObjTP } from '@system/type/AnyObjTP'
import { ValidationRulesErrMsgI18n } from '@system/validation/error-message/ValidationRulesErrMsgTP'

/**
 * DECORATOR de VALIDACAO
 * Valida SE 01 string NAO contem espacos.
 *
 * TODO: Transformar num decorator generico (incluir outros caracteres alem de espaco)
 */
export function HasNoSpace(validationOptions?: ValidationOptions) { // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjTP, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [],
            validator: HasNoSpaceValidator,
        })
    }
}

@ValidatorConstraint({ name: 'Must have no spaces' })
class HasNoSpaceValidator implements ValidatorConstraintInterface { // eslint-disable-line @typescript-eslint/naming-convention

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return (typeof value === 'string' && !value.includes(' '))
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<ValidationRulesErrMsgI18n>(ValidationRulesErrMsgI18n.CONTEXT, 'hasNoSpace')
    }
    /* eslint-enable class-methods-use-this */
}
