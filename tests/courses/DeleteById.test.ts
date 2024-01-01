import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("course path DELETE by id", () => {
    it("sends a proper param request", async () => {
        const res1 = await testServer.delete("/api/v1/courses/1");
        const res2 = await testServer.get("/api/v1/courses/1");
        expect(res1.status).toBe(200);
        expect(res1.body).toEqual({ default: "course deleted" });

        expect(res2.status).toBe(404);
        expect(res2.body).toEqual({ error: "error at getting course" });
    });

    it("sends a param not allowed", async () => {
        const res1 = await testServer.get("/api/v1/courses/-1");
        expect(res1.status).toBe(400);

        const res2 = await testServer.get("/api/v1/courses/@");
        expect(res2.status).toBe(400);
    });
});
