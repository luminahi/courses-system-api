import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup.js";

describe("course path PUT by id", () => {
    it("sends a proper param request", async () => {
        const res1 = await testServer
            .put("/api/v1/courses/1")
            .send({ name: "java course" });
        expect(res1.status).toBe(200);
        expect(res1.body).toEqual({ default: "course updated" });

        const res2 = await testServer.get("/api/v1/courses/1");
        expect(res2.body.result).toEqual({ id: 1, name: "java course" });
    });

    it("sends a param not allowed", async () => {
        const res = await testServer.put("/api/v1/courses/-1");
        expect(res.status).toBe(400);
    });
});
