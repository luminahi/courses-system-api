import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const create: RequestHandler = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) throw new Error("bad body");
        const result = await CoursesProvider.create(req.body);
        if (result instanceof Error) {
            return res.status(400).json({
                errors: {
                    default: result.message,
                },
            });
        }
        return res.status(201).send(`id ${result} created`);
    } catch (err: unknown) {
        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        }
    }
};

export { create };
