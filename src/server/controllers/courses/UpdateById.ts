import { Request, Response } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { errorHandler, DataError } from "../../shared/errors/index.js";

const updateById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) throw new DataError("invalid id");
        await CoursesProvider.updateById({ id, ...req.body });
        return res.status(200).json({ default: "course updated" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { updateById };
