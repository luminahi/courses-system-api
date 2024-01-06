import { Request, Response } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const getAll = async (req: Request, res: Response) => {
    try {
        let { page, size } = req.query;
        page = page ?? 1;
        size = size ?? 5;
        const total = await CoursesProvider.count();
        const result = await CoursesProvider.getAll({ page, size });

        const queryResult = {
            total,
            page: req.query.page,
            size: req.query.size,
            items: result,
        };

        return res.status(200).json({ queryResult });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { getAll };
