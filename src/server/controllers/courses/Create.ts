import { Request, Response, NextFunction } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const create = async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoursesProvider.create(req.body);
    if (result.isPresent())
        return res.status(201).send(`id ${result.get()?.id} created`);

    return next(result);
};

export { create };
