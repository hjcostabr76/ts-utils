/**
 * TYPE
 * Representa 01 funcao do tipo 'construtor' de 01 determinada classe.
 */
export type ConstructorTP<ClassTP> = new (...args: any[]) => ClassTP
