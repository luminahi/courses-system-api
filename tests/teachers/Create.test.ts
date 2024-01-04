import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";
import { ITeacher } from "../../src/server/database/models/index.js";

describe("teacher path POST", () => {
    it("sends a proper body", async () => {
        const teacher: Omit<ITeacher, "id"> = {
            email: "test@gmail.com",
            lastName: "firstTest",
            firstName: "lastTest",
            courseId: 1,
        };

        const res = await testServer.post("/api/v1/teachers").send(teacher);

        expect(res.status).toBe(201);
    });

    it("sends a empty body", async () => {
        const res = await testServer.post("/api/v1/teachers").send({});

        expect(res.status).toBe(400);
    });
});
