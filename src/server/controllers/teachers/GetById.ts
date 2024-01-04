import { RequestHandler } from "express";
import { TeacherProvider } from "../../database/providers/teachers/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const getById: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const result = await TeacherProvider.getById(id);
        return res.status(200).json({ result });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { getById };
