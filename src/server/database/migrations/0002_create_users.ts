import type { Knex } from "knex";
import { ETableNames } from "../ETableNames.js";

export async function up(knex: Knex) {
    await knex.schema.createTable(ETableNames.user, (table) => {
        table.bigIncrements("id").primary().index();
        table.string("name", 64).notNullable();
        table.string("email", 96).index().unique().notNullable();
        table.string("password", 64).notNullable().checkLength(">=", 8);
        table.comment("table for registered users");
    });
    return console.log(`# Created table: ${ETableNames.user}`);
}

export async function down(knex: Knex) {
    await knex.schema.dropTable(ETableNames.user);
    return console.log(`# Dropped table: ${ETableNames.user}`);
}
