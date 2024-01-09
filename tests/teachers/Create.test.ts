import { describe, expect, it, beforeAll } from "@jest/globals";
import { testServer } from "../jest.setup";
import { ITeacher } from "../../src/server/database/models/index.js";

describe("teacher path POST", () => {
    let accessToken = "";
    beforeAll(async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "alexlima@mail.com", password: "11111111" });

        accessToken = res.body.accessToken;
    });

    it("sends a proper body", async () => {
        const teacher: Omit<ITeacher, "id"> = {
            email: "test@gmail.com",
            lastName: "firstTest",
            firstName: "lastTest",
            courseId: 1,
        };

        const res = await testServer
            .post("/api/v1/teachers")
            .send(teacher)
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(201);
    });

    it("sends a empty body", async () => {
        const res = await testServer
            .post("/api/v1/teachers")
            .send({})
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(400);
    });

    it("sends a proper body", async () => {
        const teacher: Omit<ITeacher, "id"> = {
            email: "test@gmail.com",
            lastName: "firstTest",
            firstName: "lastTest",
            courseId: 1,
        };

        const res = await testServer.post("/api/v1/teachers").send(teacher);
        expect(res.status).toBe(401);
    });

    it("sends a empty body", async () => {
        const res = await testServer.post("/api/v1/teachers").send({});
        expect(res.status).toBe(401);
    });
});
