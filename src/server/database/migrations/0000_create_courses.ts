import type { Knex } from "knex";
import { ETableNames } from "../seeds/ETableNames.js";

export function up(knex: Knex) {
    return knex.schema
        .createTable(ETableNames.course, (table) => {
            table.bigIncrements("id").primary().index();
            table.string("name", 64).index().notNullable();
            table.comment("table for registered courses");
        })
        .then(() => console.log(`# Created table ${ETableNames.course}`));
}

export function down(knex: Knex) {
    return knex.schema
        .dropTable(ETableNames.course)
        .then(() => console.log(`# Dropped table ${ETableNames.course}`));
}
