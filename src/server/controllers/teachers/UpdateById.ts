import { RequestHandler } from "express";
import { TeacherProvider } from "../../database/providers/teachers/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const updateById: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await TeacherProvider.updateById({ id, ...req.body });
        return res.status(200).json({ default: "teacher updated" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { updateById };
