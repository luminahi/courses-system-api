import supertest from "supertest";
import { server } from "../src/server/Server.js";
import { afterAll, beforeAll } from "@jest/globals";
import { Knex } from "../src/server/database/knex/index.js";
import { ICourse } from "../src/server/database/models/Course.js";
import { ITeacher } from "../src/server/database/models/Teacher.js";

const testServer = supertest(server);

const courseData = [
    { name: "jest course" },
    { name: "mocha course" },
    { name: "jedis course" },
];

const teacherData = [
    {
        firstName: "nakani",
        lastName: "learner",
        email: "nakani@gmail.com",
        courseId: 1,
    },
    {
        firstName: "kaka",
        lastName: "moore",
        email: "moore@gmail.com",
        courseId: 2,
    },
    {
        firstName: "lara",
        lastName: "lemon",
        email: "lara@outlook.com",
        courseId: 3,
    },
];

async function addCourseData(data: Omit<ICourse, "id">[]) {
    for (const item of data)
        await testServer.post("/api/v1/courses").send(item);
}

async function addTeacherData(data: Omit<ITeacher, "id">[]) {
    for (const item of data)
        await testServer.post("/api/v1/teachers").send(item);
}

beforeAll(async () => {
    await Knex.migrate.latest();
    await addCourseData(courseData);
    await addTeacherData(teacherData);
});

afterAll(async () => await Knex.destroy());

export { testServer };
