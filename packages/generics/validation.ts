import { I18n } from '@hjcostabr76/i18n'

import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator'

import { gen_ValidationRulesErrMsgI18n } from './i18n/gen_ValidationRulesErrMsgI18n'
import { AnyObjT } from './type'

/**
 * DECORATOR de VALIDACAO
 * Valida SE 01 string NAO contem espacos.
 *
 * TODO: Transformar num decorator generico (incluir outros caracteres alem de espaco)
 */
export function HasNoSpace(validationOptions?: ValidationOptions) { // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjT, propertyName: string) => {
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
class HasNoSpaceValidator implements ValidatorConstraintInterface {

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return (typeof value === 'string' && !value.includes(' '))
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<gen_ValidationRulesErrMsgI18n>(gen_ValidationRulesErrMsgI18n.CONTEXT, 'hasNoSpace')
    }
    /* eslint-enable class-methods-use-this */
}

/**
 * DECORATOR de VALIDACAO: e-mail
 */
export function IsEmail(validationOptions?: ValidationOptions) { // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjT, propertyName: string) => {
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
class IsEmailValidator implements ValidatorConstraintInterface {

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return classValidator.isEmail(value)
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<gen_ValidationRulesErrMsgI18n>(gen_ValidationRulesErrMsgI18n.CONTEXT, 'isEmail')
    }
    /* eslint-enable class-methods-use-this */
}

/**
 * DECORATOR de VALIDACAO:
 * Campo obrigatorio.
 */
export function IsRequired(validationOptions?: ValidationOptions) { // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjT, propertyName: string) => {
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
class IsRequiredValidator implements ValidatorConstraintInterface {

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return !!value
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<gen_ValidationRulesErrMsgI18n>(gen_ValidationRulesErrMsgI18n.CONTEXT, 'isRequired')
    }
    /* eslint-enable class-methods-use-this */
}

/**
 * DECORATOR de VALIDACAO:
 * Tipo deve ser string.
 */
export function IsString(validationOptions?: ValidationOptions) { // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjT, propertyName: string) => {
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
class IsStringValidator implements ValidatorConstraintInterface {

    /* eslint-disable class-methods-use-this */
    validate(value: unknown): boolean {
        return (typeof value === 'string')
    }

    defaultMessage(): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<gen_ValidationRulesErrMsgI18n>(gen_ValidationRulesErrMsgI18n.CONTEXT, 'isString')
    }
    /* eslint-enable class-methods-use-this */
}

/**
 * DECORATOR de VALIDACAO:
 * Comprimento minimo.
 */
export function MinLength(validationOptions?: ValidationOptions) { // eslint-disable-line @typescript-eslint/naming-convention
    return (object: AnyObjT, propertyName: string) => {
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
class MinLengthValidator implements ValidatorConstraintInterface {

    /* eslint-disable class-methods-use-this */
    validate(value: unknown, args: ValidationArguments): boolean {
        return (typeof args.constraints[0] === 'number' && (value as any[])?.length >= args.constraints[0])
    }

    defaultMessage(args: ValidationArguments): string { // eslint-disable-line @typescript-eslint/naming-convention
        return I18n.getText<gen_ValidationRulesErrMsgI18n>(gen_ValidationRulesErrMsgI18n.CONTEXT, 'minLength')
            .replace('#', args.constraints[0])
    }
    /* eslint-enable class-methods-use-this */
}
