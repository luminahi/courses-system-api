import { Request, Response, NextFunction } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    let { page, size } = req.query;
    page = page ?? 1;
    size = size ?? 5;
    const total = await CoursesProvider.count();
    const result = await CoursesProvider.getAll({ page, size });

    if (
        total.isPresent() &&
        result.isPresent() &&
        Array.isArray(result.get())
    ) {
        const queryResult = {
            total: total.get(),
            page,
            size,
            items: result.get(),
        };

        return res.status(200).json(queryResult);
    }

    return next(result);
};

export { getAll };
