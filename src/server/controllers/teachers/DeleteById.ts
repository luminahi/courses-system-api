import { Request, Response, NextFunction } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await TeachersProvider.deleteById(Number(id));
    if (result.isPresent() && result.get() === 1)
        return res.status(204).json({});

    return next(result);
};

export { deleteById };
