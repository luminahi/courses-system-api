import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("course path POST", () => {
    it("sends a proper body", async () => {
        const res = await testServer
            .post("/api/v1/courses")
            .send({ name: "conteudo" });

        expect(res.status).toBe(201);
    });

    it("sends a empty body", async () => {
        const res = await testServer.post("/api/v1/courses").send({});

        expect(res.status).toBe(400);
    });
});
