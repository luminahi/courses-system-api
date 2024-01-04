import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("teacher path GET by id", () => {
    it("sends a proper param request", async () => {
        const res = await testServer.get("/api/v1/teachers/1");
        expect(res.status).toBe(200);
    });

    it("sends a param not allowed", async () => {
        const res = await testServer.get("/api/v1/teachers/-1");
        expect(res.status).toBe(400);
    });
});
