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
    { name: "HTML" },
    { name: "CSS" },
    { name: "React" },
    { name: "Angular" },
    { name: "Vue" },
    { name: "Svelte" },
    { name: "Typescript" },
    { name: "Coffescript" },
    { name: "Delphi" },
    { name: "Pascal" },
    { name: "Turbo Pascal" },
    { name: "VB" },
    { name: "F#" },
    { name: ".NET" },
    { name: "Python" },
    { name: "Ada" },
    { name: "Bash" },
    { name: "Sh" },
    { name: "B" },
    { name: "D" },
    { name: "Bootstrap" },
    { name: "Material" },
    { name: "VB6" },
    { name: "Next.js" },
    { name: "Express.js" },
    { name: "Deno" },
    { name: "Bun" },
];
