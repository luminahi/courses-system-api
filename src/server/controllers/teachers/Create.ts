import { Request, Response, NextFunction } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const create = async (req: Request, res: Response, next: NextFunction) => {
    const result = await TeachersProvider.create(req.body);
    if (result.isPresent())
        return res.status(201).send(`id ${result.get()?.id} created`);

    return next(result);
};

export { create };
