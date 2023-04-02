import { ObjectType } from "typeorm";
import { postgres } from "../database/postgres";

export const excludeColumns = <Entity>(
    entity: ObjectType<Entity>,
    columnsToExclude: string[]
): string[] => {
    return postgres.getRepository(entity).metadata.columns
    .map(column => column.databaseName)
    .filter(columnName => !columnsToExclude.includes(columnName));
}