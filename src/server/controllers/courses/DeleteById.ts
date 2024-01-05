import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const deleteById: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await CoursesProvider.deleteById(Number(id));
        return res.status(200).json({ default: "course deleted" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { deleteById };
