import { Request, Response } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const create = async (req: Request, res: Response) => {
    try {
        const result = await CoursesProvider.create(req.body);
        return res.status(201).send(`id ${result} created`);
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { create };
