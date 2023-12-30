import supertest from "supertest";
import { server } from "../build/server/Server.js";
import { afterAll, beforeAll } from "@jest/globals";
import { Knex } from "../build/server/database/knex/index.js";

const testServer = supertest(server);

beforeAll(async () => await Knex.migrate.latest());

afterAll(async () => await Knex.destroy());

export { testServer };
