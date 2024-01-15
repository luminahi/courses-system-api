import { describe, expect, it, beforeAll } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("teacher path GET all", () => {
    let accessToken = "";
    beforeAll(async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "alexlima@mail.com", password: "11111111" });

        accessToken = res.body.accessToken;
    });

    it("sends a request with no query", async () => {
        const res = await testServer
            .get("/api/v1/teachers")
            .auth(accessToken, { type: "bearer" });

        const { page, size } = res.body;
        expect(res.status).toBe(200);
        expect(page).toBe(1);
        expect(size).toBe(5);
    });

    it("sends a request with a specific query", async () => {
        const res = await testServer
            .get("/api/v1/teachers/?size=3&page=3")
            .auth(accessToken, { type: "bearer" });

        const { page, size } = res.body;
        expect(res.status).toBe(200);
        expect(page).toBe(3);
        expect(size).toBe(3);
    });

    it("sends a request with invalid query values", async () => {
        const res = await testServer
            .get("/api/v1/teachers/?size=@&page=!")
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(400);
    });

    it("sends a request with no query without auth", async () => {
        const res = await testServer.get("/api/v1/teachers");
        expect(res.status).toBe(401);
    });

    it("sends a request with a specific query without auth", async () => {
        const res = await testServer.get("/api/v1/teachers/?size=3&page=3");
        expect(res.status).toBe(401);
    });

    it("sends a request with invalid query values without auth", async () => {
        const res = await testServer.get("/api/v1/teachers/?size=@&page=!");
        expect(res.status).toBe(401);
    });
});
