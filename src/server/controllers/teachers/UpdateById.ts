import { NextFunction, Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const updateById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await TeachersProvider.updateById({ id, ...req.body });
    if (result.isPresent() && result.get() === 1)
        return res.status(204).json({});

    return next(result);
};

export { updateById };
