import { Knex } from "knex";
import { ETableNames } from "../ETableNames";
import { IUser } from "../models/index.js";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(ETableNames.user).del();

    // Inserts seed entries
    await knex(ETableNames.user).insert(userData);
}

const userData: Omit<IUser, "id">[] = [
    { name: "alex", email: "alex@mail.com", password: "00000000" },
];
