import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(ETableNames.course).del();

    // Inserts seed entries
    await knex(ETableNames.course).insert(coursesData);
}

const coursesData = [
    { name: "Javascript" },
    { name: "Java" },
    { name: "Rust" },
    { name: "Ruby" },
    { name: "R" },
    { name: "C" },
    { name: "C++" },
    { name: "C#" },
];
