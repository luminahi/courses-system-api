import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const create = async (req: Request, res: Response) => {
    try {
        const result = await TeachersProvider.create(req.body);
        return res.status(201).send(`id ${result} created`);
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { create };
