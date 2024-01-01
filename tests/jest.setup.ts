import supertest from "supertest";
import { server } from "../src/server/Server.js";
import { afterAll, beforeAll } from "@jest/globals";
import { Knex } from "../src/server/database/knex/index.js";

const testServer = supertest(server);

async function addData(data: { name: string }[]) {
    for (const item of data)
        await testServer.post("/api/v1/courses").send(item);
}

beforeAll(async () => {
    await Knex.migrate.latest();
    await addData([
        { name: "jest course" },
        { name: "mocha course" },
        { name: "jedis course" },
    ]);
});

afterAll(async () => await Knex.destroy());

export { testServer };