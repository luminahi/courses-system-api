import { RequestHandler } from "express";
import { TeacherProvider } from "../../database/providers/teachers/index.js";
import { QueryRequest } from "../../shared/types/sharedTypes.js";
import { errorHandler } from "../../shared/errors/index.js";

const getAll: RequestHandler = async (req, res) => {
    try {
        const total = await TeacherProvider.count();
        const result = await TeacherProvider.getAll(
            (<unknown>req.query) as QueryRequest
        );

        const queryResult = {
            total,
            page: req.query.page,
            size: req.query.size,
            items: result,
        };

        return res.status(200).json({ queryResult });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { getAll };
