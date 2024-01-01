import { describe, expect, it } from "@jest/globals";
import { testServer } from "../jest.setup";

describe("course path GET all", () => {
    it("sends a request with no query", async () => {
        const res = await testServer.get("/api/v1/courses");
        const { queryResult } = res.body;

        expect(queryResult.total).toBe(3);
        expect(queryResult.page).toBe(1);
        expect(queryResult.size).toBe(5);
        expect(queryResult.items).toHaveLength(3);
        expect(res.status).toBe(200);
    });

    it("sends a request with a specific query", async () => {
        const res = await testServer.get("/api/v1/courses/?size=3&page=3");
        expect(res.status).toBe(200);

        const { queryResult } = res.body;
        expect(queryResult).toEqual({ total: 3, page: 3, size: 3, items: [] });
    });

    it("sends a request with invalid query values", async () => {
        const res = await testServer.get("/api/v1/courses/?size=@&page=!");
        expect(res.status).toBe(400);
    });
});
