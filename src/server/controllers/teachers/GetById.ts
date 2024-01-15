import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await TeachersProvider.getById(id);
    if (result.isPresent())
        return res.status(200).json({ result: result.get() });

    return res.status(404).json({ error: "teacher not found" });
};

export { getById };
