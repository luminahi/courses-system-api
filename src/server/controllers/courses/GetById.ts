import { Request, Response } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await CoursesProvider.getById(id);
    if (result.isPresent()) return res.status(200).json(result.get());

    return res.status(404).json({ error: "course not found" });
};

export { getById };
