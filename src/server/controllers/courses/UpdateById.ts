import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const updateById: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await CoursesProvider.updateById({ id, ...req.body });
        return res.status(200).json({ default: "course updated" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { updateById };
