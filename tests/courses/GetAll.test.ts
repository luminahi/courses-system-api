import { describe, expect, it, beforeAll } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("course path GET all", () => {
    let accessToken = "";
    beforeAll(async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "alexlima@mail.com", password: "11111111" });

        accessToken = res.body.accessToken;
    });

    it("sends a request with no query", async () => {
        const res = await testServer
            .get("/api/v1/courses")
            .auth(accessToken, { type: "bearer" });
        const { queryResult } = res.body;

        expect(queryResult.page).toBe(1);
        expect(queryResult.size).toBe(5);
        expect(res.status).toBe(200);
    });

    it("sends a request with a specific query", async () => {
        const res = await testServer
            .get("/api/v1/courses/?size=3&page=3")
            .auth(accessToken, { type: "bearer" });
        const { queryResult } = res.body;

        expect(queryResult.page).toBe(3);
        expect(queryResult.size).toBe(3);
        expect(res.status).toBe(200);
    });

    it("sends a request with invalid query values", async () => {
        const res = await testServer
            .get("/api/v1/courses/?size=@&page=!")
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(400);
    });

    it("sends a request with no query", async () => {
        const res = await testServer.get("/api/v1/courses");
        expect(res.status).toBe(401);
    });

    it("sends a request with a specific query", async () => {
        const res = await testServer.get("/api/v1/courses/?size=3&page=3");
        expect(res.status).toBe(401);
    });

    it("sends a request with invalid query values", async () => {
        const res = await testServer.get("/api/v1/courses/?size=@&page=!");
        expect(res.status).toBe(401);
    });
});
