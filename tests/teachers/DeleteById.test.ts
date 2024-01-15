import { describe, expect, it, beforeAll } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("teacher path DELETE by id", () => {
    let accessToken = "";
    beforeAll(async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "alexlima@mail.com", password: "11111111" });

        accessToken = res.body.accessToken;
    });

    it("sends a proper param request", async () => {
        const res1 = await testServer
            .delete("/api/v1/teachers/1")
            .auth(accessToken, { type: "bearer" });

        const res2 = await testServer
            .get("/api/v1/teachers/1")
            .auth(accessToken, { type: "bearer" });

        expect(res1.status).toBe(204);
        expect(res1.body).toEqual({});

        expect(res2.status).toBe(404);
        expect(res2.body).toEqual({ error: "not found" });
    });

    it("sends a param not allowed", async () => {
        const res1 = await testServer
            .get("/api/v1/teachers/-1")
            .auth(accessToken, { type: "bearer" });
        expect(res1.status).toBe(400);

        const res2 = await testServer
            .get("/api/v1/teachers/@")
            .auth(accessToken, { type: "bearer" });
        expect(res2.status).toBe(400);
    });

    it("sends a proper param request without auth", async () => {
        const res1 = await testServer.delete("/api/v1/teachers/1");
        const res2 = await testServer.get("/api/v1/teachers/1");

        expect(res1.status).toBe(401);
        expect(res2.status).toBe(401);
    });

    it("sends a param not allowed without auth", async () => {
        const res1 = await testServer.get("/api/v1/teachers/-1");
        expect(res1.status).toBe(401);

        const res2 = await testServer.get("/api/v1/teachers/@");
        expect(res2.status).toBe(401);
    });
});
