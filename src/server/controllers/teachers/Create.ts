import { RequestHandler } from "express";
import { TeacherProvider } from "../../database/providers/teachers/index.js";

const create: RequestHandler = async (req, res) => {
    try {
        const result = await TeacherProvider.create(req.body);
        return res.status(201).send(`id ${result} created`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        }
    }
};

export { create };
