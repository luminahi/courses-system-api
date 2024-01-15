import { NextFunction, Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const getById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) return next("invalid id");

    const result = await TeachersProvider.getById(id);
    if (result.isPresent()) return res.status(200).json(result.get());
    return next(result);
};

export { getById };
