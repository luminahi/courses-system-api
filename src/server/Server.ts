import express from "express";
import { teacherRouter } from "./routes/teacher.js";
import { courseRouter } from "./routes/course.js";
import { indexRouter } from "./routes/index.js";
import { userRouter } from "./routes/users.js";

const server = express();
server.use(express.json());

server.use("/api/v1/teachers", teacherRouter);
server.use("/api/v1/courses", courseRouter);
server.use("/api/v1", indexRouter);
server.use("/", userRouter);

export { server };
