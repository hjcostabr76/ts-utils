import {
    ClassDeclaration, Decorator, EnumDeclaration, InterfaceDeclaration, MethodDeclaration, Project, PropertyDeclaration, PropertySignature, SourceFile, SyntaxKind,
    TypeAliasDeclaration
} from 'ts-morph'

import { InvalidArgsError } from '../error'
import { OrUndefT } from '../type'

/**
 * UTILITARIOS
 * Metodos auxiliares para mapeamento de metadados de elementos do codigo.
 */
export class ReflectionUtils {

    private static tsMorphProject?: Project

    static getClass(className: string): ClassDeclaration {
        const classDeclaration = ReflectionUtils.getFile(className).getClass(className)
        if (!classDeclaration)
            throw new InvalidArgsError(`Definicao para classe '${className}' nao localizada`)
        return classDeclaration
    }

    static getClassMethod(className: string, methodName: string): MethodDeclaration {
        const method = ReflectionUtils.getClass(className).getMethod(methodName)
        if (!method)
            throw new InvalidArgsError(`Declaracao do metodo '${className}.${methodName}' nao localizada`)
        return method
    }

    static getClassProps(className: string): PropertyDeclaration[] {

        const classDeclaration = ReflectionUtils.getClass(className)
        const classProps = classDeclaration.getProperties()

        const parentClassName = classDeclaration.getBaseClass()?.getName()
        if (parentClassName)
            classProps.push(...ReflectionUtils.getClassProps(parentClassName))

        return classProps
    }

    static getClassProp(className: string, propName: string): PropertyDeclaration {

        const classDeclaration = ReflectionUtils.getClass(className)

        let prop: OrUndefT<PropertyDeclaration> = classDeclaration.getProperty(propName)

        if (!prop) {
            const parentClassName = classDeclaration.getBaseClass()?.getName()
            if (parentClassName)
                prop = ReflectionUtils.getClassProp(parentClassName, propName)
        }

        if (prop)
            return prop

        throw new InvalidArgsError(`Propriedade "${className}.${propName}" nao localizada`)
    }

    static getClassParent(nameOrDeclaration: string | ClassDeclaration): OrUndefT<ClassDeclaration> {

        const isStringParam = (typeof nameOrDeclaration === 'string')
        let childClass: OrUndefT<ClassDeclaration>

        if (isStringParam)
            childClass = ReflectionUtils.getClass(nameOrDeclaration as string)

        else if (nameOrDeclaration instanceof ClassDeclaration)
            childClass = nameOrDeclaration

        if (childClass)
            return childClass.getBaseClass()

        const className = isStringParam ? (nameOrDeclaration as string) : '?'
        throw new InvalidArgsError(`Impossivel localizar classe "${className}"`)
    }

    static getClassDecorator(className: string, decoratorName: string): Decorator {
        const decorator = ReflectionUtils.getClass(className).getDecorator(decoratorName)
        if (!decorator)
            throw new InvalidArgsError(`Classe "${className}" nao possui decorator "${decoratorName}"`)
        return decorator
    }

    static getClassPublicNonStaticProps(className: string): PropertyDeclaration[] {
        return ReflectionUtils.getClassProps(className)
            .filter(prop => (
                !prop.hasModifier(SyntaxKind.PrivateIdentifier)
                && !prop.hasModifier(SyntaxKind.PrivateKeyword)
                && !prop.hasModifier(SyntaxKind.ProtectedKeyword)
                && !prop.hasModifier(SyntaxKind.StaticKeyword)
            ))
    }

    static isPropRequired(prop: PropertyDeclaration | PropertySignature): boolean {
        const propType = prop.getType()
        return (
            !prop.hasQuestionToken()
            && (!propType.isUnion() || !propType.getUnionTypes().some(type => type.isUndefined()))
        )
    }

    static getInterface(nameOrDeclaration: string | InterfaceDeclaration): InterfaceDeclaration {

        if (typeof nameOrDeclaration !== 'string')
            return nameOrDeclaration

        const interfaceDeclaration = ReflectionUtils.getFile(nameOrDeclaration).getInterface(nameOrDeclaration)
        if (interfaceDeclaration)
            return interfaceDeclaration

        throw new InvalidArgsError(`Definicao para interface "${nameOrDeclaration}" nao encontrada`)
    }

    static getInterfaceProps(nameOrDeclaration: string | InterfaceDeclaration): PropertySignature[] {
        const interfaceDeclaration = ReflectionUtils.getInterface(nameOrDeclaration)
        const props: PropertySignature[] = Array.from(interfaceDeclaration.getProperties())
        ReflectionUtils.getInterfaceParents(interfaceDeclaration).forEach(parent => props.push(...parent.getProperties()))
        return props
    }

    static getInterfaceParents(nameOrDeclaration: string | InterfaceDeclaration, interfacePrefix = 'I'): InterfaceDeclaration[] {
        const interfaceDeclaration = ReflectionUtils.getInterface(nameOrDeclaration)
        const parentNameRegex = new RegExp(`(.+.)?(${interfacePrefix}\\w+)(<.+>)?$`)
        const parentNames = interfaceDeclaration.getBaseTypes().map(type => type.getText().replace(parentNameRegex, '$2'))
        return parentNames.map(parentName => ReflectionUtils.getInterface(parentName))
    }

    static getEnum(enumName: string): EnumDeclaration {
        const enumDeclaration = ReflectionUtils.getFile(enumName).getEnum(enumName)
        if (!enumDeclaration)
            throw new InvalidArgsError(`Enum '${enumName}' nao localizado`)
        return enumDeclaration
    }

    static getEnumMemberValues(enumName: string): string[] | number[] {
        return ReflectionUtils.getEnum(enumName)
            .getMembers()
            .map(enumMember => enumMember.getValue())
            .filter(enumValue => (enumValue !== undefined)) as (string[] | number[])
    }

    static getType(typeName: string): TypeAliasDeclaration {
        const typeDeclaration = ReflectionUtils.getFile(typeName).getTypeAlias(typeName)
        if (!typeDeclaration)
            throw new InvalidArgsError(`Type '${typeName}' nao localizado`)
        return typeDeclaration
    }

    private static getFile(fileName: string): SourceFile {
        const source = ReflectionUtils.getTsMorphProject().getSourceFile(ReflectionUtils.getFileName(fileName))
        if (!source)
            throw new InvalidArgsError(`Arquivo '${fileName}' nao localizado`)
        return source
    }

    private static getFileName(codeElementName: string): string {
        return `${codeElementName}.ts`
    }

    private static getTsMorphProject(): Project {
        if (!ReflectionUtils.tsMorphProject)
            ReflectionUtils.tsMorphProject = new Project({ tsConfigFilePath: 'tsconfig.json' })
        return ReflectionUtils.tsMorphProject
    }
}
