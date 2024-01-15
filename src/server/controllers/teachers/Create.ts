import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const create = async (req: Request, res: Response) => {
    const result = await TeachersProvider.create(req.body);
    if (result.isPresent())
        return res.status(201).send(`id ${result.get()?.id} created`);

    return res.status(400).json({ error: "error creating teacher" });
};

export { create };
