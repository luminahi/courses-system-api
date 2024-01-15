import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const getAll = async (req: Request, res: Response) => {
    let { page, size } = req.query;
    page = page ?? 1;
    size = size ?? 5;
    const total = await TeachersProvider.count();
    const result = await TeachersProvider.getAll({ page, size });

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

    return res.status(400).json({ error: "error getting teachers" });
};

export { getAll };
