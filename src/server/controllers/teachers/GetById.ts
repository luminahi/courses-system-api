import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";
import { DataError, errorHandler } from "../../shared/errors/index.js";

const getById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!id) throw new DataError("invalid id");
        const result = await TeachersProvider.getById(id);
        return res.status(200).json({ result });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { getById };
