import { Knex } from "knex";
import path from "path";
import { fileURLToPath } from "url";

export const development: Knex.Config = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            "..",
            "..",
            "..",
            "..",
            "database.sqlite"
        ),
    },
    migrations: {
        directory: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            "..",
            "migrations"
        ),
    },
    seeds: {
        directory: path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            "..",
            "seeds"
        ),
    },
};

export const test: Knex.Config = { ...development, connection: ":memory:" };
export const production: Knex.Config = { ...development };
