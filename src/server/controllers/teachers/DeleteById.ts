import { RequestHandler } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const deleteById: RequestHandler = async (req, res) => {
    try {
        const id = Number(req.params.id);
        await TeachersProvider.deleteById(id);
        return res.status(200).json({ default: "teacher deleted" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { deleteById };
