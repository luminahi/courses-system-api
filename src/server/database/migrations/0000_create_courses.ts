import type { Knex } from "knex";
import { ETableNames } from "../ETableNames.js";

export async function up(knex: Knex) {
    await knex.schema.createTable(ETableNames.course, (table) => {
        table.bigIncrements("id").primary().index();
        table.string("name", 64).index().notNullable();
        table.comment("table for registered courses");
    });
    return console.log(`# Created table: ${ETableNames.course}`);
}

export async function down(knex: Knex) {
    await knex.schema.dropTable(ETableNames.course);
    return console.log(`# Dropped table: ${ETableNames.course}`);
}
