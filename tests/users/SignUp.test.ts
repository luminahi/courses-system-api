import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("signup POST", () => {
    it("tries to sign up with a valid body", async () => {
        const res1 = await testServer.post("/signup").send({
            name: "john doe",
            email: "john@mail.com",
            password: "10101010",
        });

        expect(res1.status).toBe(201);

        const res2 = await testServer
            .post("/signin")
            .send({ email: "john@mail.com", password: "10101010" });

        const { accessToken } = res2.body;

        expect(accessToken).toBeTruthy();
    });

    it("tries to sign up with no name", async () => {
        const res = await testServer
            .post("/signup")
            .send({ email: "unknown@mail.com", password: "11111111" });

        expect(res.status).toBe(400);
    });

    it("tries to sign up with no password", async () => {
        const res = await testServer
            .post("/signup")
            .send({ name: "user", email: "unknown@mail.com" });

        expect(res.status).toBe(400);
    });

    it("tries to sign up with no email", async () => {
        const res = await testServer
            .post("/signup")
            .send({ name: "user", password: "tr1ut1hbe0told" });

        expect(res.status).toBe(400);
    });

    it("tries to sign up with a empty body", async () => {
        const res = await testServer.post("/signup").send({});

        expect(res.status).toBe(400);
    });
});
