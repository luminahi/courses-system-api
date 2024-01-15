import { Request, Response } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const create = async (req: Request, res: Response) => {
    const result = await CoursesProvider.create(req.body);
    if (result.isPresent())
        return res.status(201).send(`id ${result.get()?.id} created`);

    return res.status(400).json({ error: "error creating course" });
};

export { create };
