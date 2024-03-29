import type { Knex } from "knex";
import { ETableNames } from "../ETableNames.js";

export async function up(knex: Knex) {
    await knex.schema.createTable(ETableNames.teacher, (table) => {
        table.bigIncrements("id").primary().index();
        table.string("firstName", 32).notNullable();
        table.string("lastName", 32).index().notNullable();
        table.string("email", 64).unique().notNullable();
        table
            .bigInteger("courseId")
            .references("id")
            .inTable(ETableNames.course)
            .notNullable()
            .onDelete("RESTRICT");
        table.comment("table for registered teachers");
    });
    // return console.log(`# Created table: ${ETableNames.teacher}`);
}

export async function down(knex: Knex) {
    await knex.schema.dropTable(ETableNames.teacher);
    // return console.log(`# Dropped table: ${ETableNames.teacher}`);
}
