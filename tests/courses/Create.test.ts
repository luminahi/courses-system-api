import { beforeAll, describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("course path POST", () => {
    let accessToken = "";
    beforeAll(async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "alexlima@mail.com", password: "11111111" });

        accessToken = res.body.accessToken;
    });

    it("sends a proper body", async () => {
        const res = await testServer
            .post("/api/v1/courses")
            .send({ name: "content" })
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(201);
    });

    it("sends a empty body", async () => {
        const res = await testServer
            .post("/api/v1/courses")
            .send({})
            .auth(accessToken, { type: "bearer" });

        expect(res.status).toBe(400);
    });

    it("sends a proper body without auth", async () => {
        const res = await testServer
            .post("/api/v1/courses")
            .send({ name: "content" });

        expect(res.status).toBe(401);
    });
});
