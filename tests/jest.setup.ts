import supertest from "supertest";
import { server } from "../src/server/Server.js";
import { afterAll, beforeAll } from "@jest/globals";
import { Knex } from "../src/server/database/knex/index.js";

process.env.JWT_SECRET = "testing";

const testServer = supertest(server);

beforeAll(async () => {
    await Knex.migrate.latest();
    await Knex.seed.run();
});

afterAll(async () => {
    await Knex.destroy();
});

export { testServer };
