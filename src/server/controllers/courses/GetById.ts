import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const getById: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error("bad param");
        const result = await CoursesProvider.getById(Number(id));
        return res.status(200).json({ result });
    } catch (err: unknown) {
        if (err instanceof Error)
            return res.status(404).json({ error: err.message });
    }
};

export { getById };
