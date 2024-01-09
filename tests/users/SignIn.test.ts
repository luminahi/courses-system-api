import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("signin POST", () => {
    it("tries to sign in with a registered user and valid body", async () => {
        const res = await testServer.post("/signin").send({
            email: "soralumi@mail.com",
            password: "00000000",
        });

        expect(res.status).toBe(200);
    });

    it("tries to sign in with a not registered user and valid body", async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "unknown@mail.com", password: "11111111" });

        expect(res.status).toBe(401);
    });

    it("tries to sign in using only the registered email", async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "soralumi@mail.com" });

        expect(res.status).toBe(400);
    });

    it("tries to sign in using only the email but not registered", async () => {
        const res = await testServer
            .post("/signin")
            .send({ email: "unknown@mail.com" });

        expect(res.status).toBe(400);
    });

    it("tries to sign in with a empty body", async () => {
        const res = await testServer.post("/signin").send({});

        expect(res.status).toBe(400);
    });
});
