import { Request, Response, NextFunction } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await CoursesProvider.deleteById(Number(id));
    if (result.isPresent() && result.get() === 1)
        return res.status(204).json({});

    return next(result);
};

export { deleteById };
