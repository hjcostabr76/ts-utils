/**
 * ENUM
 * Tipos de relacionamentos possiveis entre tabelas de BD.
 *
 * NOTE: Manter esse formato nos valores do enum para compatibilidade com mikro-orm
 */
export enum RelationshipTypeEnum {
    ONE_ONE = '1:1',
    ONE_MANY = '1:m',
    MANY_ONE = 'm:1',
    MANY_MANY = 'm:n',
}
