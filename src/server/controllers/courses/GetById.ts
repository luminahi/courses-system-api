import { Request, Response, NextFunction } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const getById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) return next("invalid id");

    const result = await CoursesProvider.getById(id);
    if (result.isPresent()) return res.status(200).json(result.get());
    return next(result);
};

export { getById };
