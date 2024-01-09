import { Knex } from "knex";
import { ETableNames } from "../ETableNames";
import { ITeacher } from "../models/index.js";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(ETableNames.teacher).del();

    // Inserts seed entries
    await knex(ETableNames.teacher).insert(teachersData);
}

const teachersData: Omit<ITeacher, "id">[] = [
    {
        firstName: "Laith",
        lastName: "Hays",
        email: "hays@google.com",
        courseId: 1,
    },
    {
        firstName: "Ivana",
        lastName: "Burt",
        email: "burt@google.com",
        courseId: 14,
    },
    {
        firstName: "Margaret",
        lastName: "Aguilar",
        email: "aguilar@outlook.com",
        courseId: 6,
    },
];
