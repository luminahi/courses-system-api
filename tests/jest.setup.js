import supertest from "supertest";
import { server } from "../build/server/Server.js";
import { afterAll, beforeAll } from "@jest/globals";
import { Knex } from "../build/server/database/knex/index.js";

const testServer = supertest(server);

beforeAll(async () => {
    console.log("start");
    await Knex.migrate.latest();
});

afterAll(async () => {
    console.log("END");
    await Knex.destroy();
});

export { testServer };
