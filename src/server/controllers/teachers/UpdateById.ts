import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";
import { errorHandler, DataError } from "../../shared/errors/index.js";

const updateById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) throw new DataError("invalid id");
        await TeachersProvider.updateById({ id, ...req.body });
        return res.status(200).json({ default: "teacher updated" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { updateById };
