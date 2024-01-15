import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await TeachersProvider.deleteById(id);
    if (result.isPresent() && result.get() === 1) return res.status(204).send();

    return res.status(404).json({ error: "teacher not found" });
};

export { deleteById };
