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
    {
        name: "sora lumi",
        email: "soralumi@mail.com",
        password:
            "$2a$10$0ODbj/2Ark08j3.z2byHrOLORdDKEuZw25qnqH18sK6D8tmdmGjOK",
    },
    {
        name: "alex lima",
        email: "alexlima@mail.com",
        password:
            "$2a$10$bTsngPfYGEA2Dz.4b7tenOn8K9kOU87e4ImD4VcWQlWL6xfVOrX96",
    },
];
