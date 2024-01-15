import { Request, Response } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await CoursesProvider.deleteById(Number(id));
    if (result.isPresent() && result.get() === 1)
        return res.status(204).json({});

    return res.status(404).json({ error: "course not found" });
};

export { deleteById };
