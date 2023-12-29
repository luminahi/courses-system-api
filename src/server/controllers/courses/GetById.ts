import { RequestHandler } from "express";
import { CoursesProvider } from "src/server/database/providers/courses/index.js";

type idParam = { id: number };

const getById: RequestHandler = async (req, res) => {
    try {
        const result = await CoursesProvider.getById(
            <idParam>(<unknown>req.params)
        );
        return res.status(200).json({ result });
    } catch (err) {
        return res.status(404).json({ result: "not found" });
    }
};

export { getById };
