import { RequestHandler } from "express";
import { TeacherProvider } from "../../database/providers/teachers/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const deleteById: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await TeacherProvider.deleteById(id);
        return res.status(200).json({ default: "teacher deleted" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { deleteById };
