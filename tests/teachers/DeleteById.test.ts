import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("teacher path DELETE by id", () => {
    it("sends a proper param request", async () => {
        const res1 = await testServer.delete("/api/v1/teachers/1");
        const res2 = await testServer.get("/api/v1/teachers/1");

        expect(res1.status).toBe(200);
        expect(res1.body).toEqual({ default: "teacher deleted" });

        expect(res2.status).toBe(404);
        expect(res2.body).toEqual({ error: "teacher not found" });
    });

    it("sends a param not allowed", async () => {
        const res1 = await testServer.get("/api/v1/teachers/-1");
        expect(res1.status).toBe(400);

        const res2 = await testServer.get("/api/v1/teachers/@");
        expect(res2.status).toBe(400);
    });
});