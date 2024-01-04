import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";
import { ITeacher } from "../../src/server/database/models/index.js";

describe("teacher path PUT by id", () => {
    it("sends a proper param request", async () => {
        const teacher: Omit<ITeacher, "id"> = {
            email: "test@gmail.com",
            lastName: "firstTest",
            firstName: "lastTest",
            courseId: 1,
        };

        const res1 = await testServer.put("/api/v1/teachers/1").send(teacher);
        expect(res1.status).toBe(200);
        expect(res1.body).toEqual({ default: "teacher updated" });

        const res2 = await testServer.get("/api/v1/teachers/1");
        console.log(res2.body.result);
        console.log({ id: 1, ...teacher });
        expect(res2.body.result).toEqual({ id: 1, ...teacher });
    });

    it("sends a param not allowed", async () => {
        const res = await testServer.put("/api/v1/teachers/-1");
        expect(res.status).toBe(400);
    });
});
