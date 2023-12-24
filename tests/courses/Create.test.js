import { describe, it } from "node:test";
// import assert from "node:assert";
import request from "supertest";
import { server } from "../../build/server/Server.js";

describe("course route", () => {
    it("sends a proper body", () => {
        request(server)
            .post("/api/v1/courses")
            .send({
                id: "100",
                name: "Javascript Course",
            })
            .expect(201)
            .end((err) => {
                if (err) throw err;
            });
    });

    it("sends a incomplete body", () => {
        request(server)
            .post("/api/v1/courses")
            .send({ name: "Java Course" })
            .expect(400)
            .end((err) => {
                if (err) throw err;
            });
    });
});

describe("teacher route", () => {});
