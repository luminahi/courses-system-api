import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { QueryRequest } from "../../shared/@types/sharedTypes.js";

const getAll: RequestHandler = async (req, res) => {
    try {
        const result = await CoursesProvider.getAll(
            (<unknown>req.query) as QueryRequest
        );
        return res.status(200).json({ result });
    } catch {
        return res.status(200).json({ error: "something unexpected ocurred" });
    }
};

export { getAll };
