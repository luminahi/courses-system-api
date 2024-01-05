import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";
// import { ITeacher } from "../../src/server/database/models/index.js";

describe("course path POST", () => {
    it("sends a proper body", async () => {
        const res = await testServer
            .post("/api/v1/courses")
            .send({ name: "content" });

        expect(res.status).toBe(201);
    });

    it("sends a empty body", async () => {
        const res = await testServer.post("/api/v1/courses").send({});

        expect(res.status).toBe(400);
    });
});
