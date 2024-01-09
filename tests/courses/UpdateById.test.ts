import { describe, expect, it, beforeAll } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("course path PUT by id", () => {
    let accessToken = "";
    beforeAll(async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "alexlima@mail.com", password: "11111111" });

        accessToken = res.body.accessToken;
    });

    it("sends a proper param request", async () => {
        const res1 = await testServer
            .put("/api/v1/courses/1")
            .send({ name: "java course" })
            .auth(accessToken, { type: "bearer" });

        expect(res1.status).toBe(200);
        expect(res1.body).toEqual({ default: "course updated" });

        const res2 = await testServer
            .get("/api/v1/courses/1")
            .auth(accessToken, { type: "bearer" });

        expect(res2.body.result).toEqual({ id: 1, name: "java course" });
    });

    it("sends a param not allowed", async () => {
        const res = await testServer
            .put("/api/v1/courses/-1")
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(400);
    });

    it("sends a proper param request without auth", async () => {
        const res1 = await testServer
            .put("/api/v1/courses/1")
            .send({ name: "java course" });

        expect(res1.status).toBe(401);
    });

    it("sends a param not allowed without auth", async () => {
        const res = await testServer.put("/api/v1/courses/-1");

        expect(res.status).toBe(401);
    });
});
