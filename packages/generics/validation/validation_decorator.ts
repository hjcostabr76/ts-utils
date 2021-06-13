import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, isEmail } from 'class-validator'

import { AnyObjT, ConstructorT } from '../type'
import { Validator as hjValidator } from './Validator'
import { ValidationDecoratorConfigT } from './validation_types'

/* eslint-disable class-methods-use-this, @typescript-eslint/naming-convention */

/**
 * DECORATOR de VALIDACAO
 * Valida SE 01 string NAO caracteres especificos.
 */
export function HasNoChars(forbiddenChars: string, params?: ValidationDecoratorConfigT) {
    return (object: AnyObjT, propertyName: string) => buildDecorator(HasNoSpaceValidator, object, propertyName, params, [forbiddenChars])
}

@ValidatorConstraint({ name: 'Must have no specified chars' })
class HasNoSpaceValidator implements ValidatorConstraintInterface {

    validate(value: unknown, args: ValidationArguments): boolean {
        const forbiddenChars = args.constraints[0] as string
        return (typeof value === 'string' && !Array.from(forbiddenChars).some(char => value.includes(char)))
    }

    defaultMessage(args: ValidationArguments): string {
        return hjValidator.getErrorMessage('hasNoChars').replace('#', args.constraints[0])
    }
}

/**
 * DECORATOR de VALIDACAO: e-mail
 */
export function IsEmail(params?: ValidationDecoratorConfigT) {
    return (object: AnyObjT, propertyName: string) => buildDecorator(IsEmailValidator, object, propertyName, params)
}

@ValidatorConstraint({ name: 'Must be an e-mail' })
class IsEmailValidator implements ValidatorConstraintInterface {

    validate(value: unknown): boolean {
        return isEmail(value)
    }

    defaultMessage(): string {
        return hjValidator.getErrorMessage('isEmail')
    }
}

/**
 * DECORATOR de VALIDACAO:
 * Campo obrigatorio.
 */
export function IsRequired(params?: ValidationDecoratorConfigT) {
    return (object: AnyObjT, propertyName: string) => buildDecorator(IsRequiredValidator, object, propertyName, params)
}

@ValidatorConstraint({ name: 'Required Field' })
class IsRequiredValidator implements ValidatorConstraintInterface {

    validate(value: unknown): boolean {
        return !!value
    }

    defaultMessage(): string {
        return hjValidator.getErrorMessage('isRequired')
    }
}

/**
 * DECORATOR de VALIDACAO:
 * Tipo deve ser string.
 */
export function IsString(params?: ValidationDecoratorConfigT) {
    return (object: AnyObjT, propertyName: string) => buildDecorator(IsStringValidator, object, propertyName, params)
}

@ValidatorConstraint({ name: 'Must be string' })
class IsStringValidator implements ValidatorConstraintInterface {

    validate(value: unknown): boolean {
        return (typeof value === 'string')
    }

    defaultMessage(): string {
        return hjValidator.getErrorMessage('isString')
    }
}

/**
 * DECORATOR de VALIDACAO:
 * Comprimento minimo.
 */
export function MinLength(minLength: number, params?: ValidationDecoratorConfigT) {
    return (object: AnyObjT, propertyName: string) => buildDecorator(MinLengthValidator, object, propertyName, params, [minLength])
}

@ValidatorConstraint({ name: 'Must have length greater than or equal to value' })
class MinLengthValidator implements ValidatorConstraintInterface {

    validate(value: unknown, args: ValidationArguments): boolean {
        return (typeof args.constraints[0] === 'number' && (value as any[])?.length >= args.constraints[0])
    }

    defaultMessage(args: ValidationArguments): string {
        return hjValidator.getErrorMessage('isString').replace('#', args.constraints[0])
    }
}

/* eslint-enable class-methods-use-this, @typescript-eslint/naming-convention */

function buildDecorator(
    validator: ConstructorT<any>,
    object: AnyObjT,
    propertyName: string,
    options?: ValidationDecoratorConfigT,
    constraints?: Array<number | string>,
): void {
    registerDecorator({
        target: object.constructor,
        propertyName,
        constraints,
        validator,
        options,
    })
}
