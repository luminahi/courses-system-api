import { describe, expect, it, beforeAll } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("course path GET by id", () => {
    let accessToken = "";
    beforeAll(async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "alexlima@mail.com", password: "11111111" });

        accessToken = res.body.accessToken;
    });

    it("sends a proper param request", async () => {
        const res = await testServer
            .get("/api/v1/courses/1")
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(200);
    });

    it("sends a param not allowed", async () => {
        const res = await testServer
            .get("/api/v1/courses/-1")
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(400);
    });

    it("sends a proper param request without auth", async () => {
        const res = await testServer.get("/api/v1/courses/1");

        expect(res.status).toBe(401);
    });

    it("sends a param not allowed without auth", async () => {
        const res = await testServer.get("/api/v1/courses/-1");

        expect(res.status).toBe(401);
    });
});
