import { Request, Response } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { errorHandler, DataError } from "../../shared/errors/index.js";

const deleteById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) throw new DataError("invalid id");
        await CoursesProvider.deleteById(Number(id));
        return res.status(200).json({ default: "course deleted" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { deleteById };
