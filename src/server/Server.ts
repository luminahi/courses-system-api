import express from "express";
import { teacherRouter } from "./routes/teacher.js";
import { courseRouter } from "./routes/course.js";
import { indexRouter } from "./routes/index.js";
import { userRouter } from "./routes/users.js";
import { accessControl } from "./shared/middlewares/auth/AccessControl.js";
import { dataErrorHandler } from "./shared/middlewares/errors/DataErrorHandler.js";
import { userErrorHandler } from "./shared/middlewares/errors/UserErrorHandler.js";

const server = express();
server.use(express.json());

server.use("/api/v1/teachers", accessControl, teacherRouter);
server.use("/api/v1/courses", accessControl, courseRouter);
server.use("/api/v1/", indexRouter);
server.use("/", userRouter);

server.use("/api/v1/", dataErrorHandler);
server.use("^/sign(in|up)$", userErrorHandler);

export { server };
