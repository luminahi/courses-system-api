import { Knex } from "knex";
import path from "path";

export const development: Knex.Config = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(
            path.dirname("."),
            "..",
            "..",
            "..",
            "..",
            "database.sqlite"
        ),
    },
    migrations: {
        directory: path.resolve(path.dirname("."), "..", "migrations"),
    },
    seeds: {
        directory: path.resolve(path.dirname("."), "..", "seeds"),
    },
    pool: {
        afterCreate: (
            connection: { run: (str: string) => void },
            done: () => void
        ) => {
            connection.run("PRAGMA foreign_keys = ON");
            done();
        },
    },
};

export const test: Knex.Config = { ...development, connection: ":memory:" };
export const production: Knex.Config = { ...development };
