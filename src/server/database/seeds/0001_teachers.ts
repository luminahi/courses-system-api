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
    {
        firstName: "Wing",
        lastName: "Pace",
        email: "pace@outlook.com",
        courseId: 2,
    },
    {
        firstName: "Honorato",
        lastName: "Cantrell",
        email: "cantrell@google.com",
        courseId: 17,
    },
    {
        firstName: "Ina",
        lastName: "Fry",
        email: "fry2521@google.com",
        courseId: 2,
    },
    {
        firstName: "Tallulah",
        lastName: "Pate",
        email: "pate1190@outlook.com",
        courseId: 13,
    },
    {
        firstName: "Isabelle",
        lastName: "Mcbride",
        email: "mcbride@outlook.com",
        courseId: 2,
    },
    {
        firstName: "Larissa",
        lastName: "Beck",
        email: "beck@outlook.com",
        courseId: 10,
    },
    {
        firstName: "Hayes",
        lastName: "Byers",
        email: "byers@google.com",
        courseId: 8,
    },
    {
        firstName: "Thomas",
        lastName: "Norton",
        email: "norton8838@outlook.com",
        courseId: 10,
    },
    {
        firstName: "Adrian",
        lastName: "Miranda",
        email: "miranda2596@outlook.com",
        courseId: 7,
    },
    {
        firstName: "Hayfa",
        lastName: "Salazar",
        email: "salazar@google.com",
        courseId: 16,
    },
    {
        firstName: "Farrah",
        lastName: "Lopez",
        email: "lopez@outlook.com",
        courseId: 7,
    },
    {
        firstName: "Hayes",
        lastName: "Frank",
        email: "frank2766@outlook.com",
        courseId: 1,
    },
    {
        firstName: "Damian",
        lastName: "Strong",
        email: "strong@google.com",
        courseId: 19,
    },
    {
        firstName: "Len",
        lastName: "Howell",
        email: "howell8620@google.com",
        courseId: 9,
    },
    {
        firstName: "Orlando",
        lastName: "Franklin",
        email: "franklin5521@outlook.com",
        courseId: 8,
    },
    {
        firstName: "Beau",
        lastName: "Gay",
        email: "gay@outlook.com",
        courseId: 8,
    },
    {
        firstName: "Victor",
        lastName: "Pitts",
        email: "pitts@outlook.com",
        courseId: 15,
    },
    {
        firstName: "Yasir",
        lastName: "Walton",
        email: "walton5208@outlook.com",
        courseId: 12,
    },
    {
        firstName: "Ignatius",
        lastName: "Chaney",
        email: "chaney1798@google.com",
        courseId: 3,
    },
    {
        firstName: "Stuart",
        lastName: "Hammond",
        email: "hammond873@outlook.com",
        courseId: 17,
    },
    {
        firstName: "Britanni",
        lastName: "Strickland",
        email: "strickland@google.com",
        courseId: 13,
    },
    {
        firstName: "Avye",
        lastName: "Sullivan",
        email: "sullivan7447@google.com",
        courseId: 19,
    },
    {
        firstName: "Naida",
        lastName: "Christian",
        email: "christian9449@google.com",
        courseId: 20,
    },
    {
        firstName: "Nerea",
        lastName: "Miranda",
        email: "miranda6850@outlook.com",
        courseId: 9,
    },
    {
        firstName: "Cally",
        lastName: "Lynch",
        email: "lynch9457@outlook.com",
        courseId: 3,
    },
    {
        firstName: "Willa",
        lastName: "Petty",
        email: "petty@google.com",
        courseId: 14,
    },
    {
        firstName: "Lilah",
        lastName: "Swanson",
        email: "swanson4475@outlook.com",
        courseId: 5,
    },
    {
        firstName: "Madeline",
        lastName: "Coleman",
        email: "coleman8052@outlook.com",
        courseId: 13,
    },
    {
        firstName: "Carter",
        lastName: "Fry",
        email: "fry3913@outlook.com",
        courseId: 13,
    },
    {
        firstName: "Jamalia",
        lastName: "Carney",
        email: "carney9351@google.com",
        courseId: 12,
    },
];
