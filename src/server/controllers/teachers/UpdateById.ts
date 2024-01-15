import { Request, Response } from "express";
import { TeachersProvider } from "../../database/providers/teachers/index.js";

const updateById = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) return res.status(200).json({ error: "invalid id" });

    const result = await TeachersProvider.updateById({ id, ...req.body });
    if (result.isPresent() && result.get() === 1)
        return res.status(204).json({});

    return res.status(400).json({ error: "teacher not updated" });
};

export { updateById };
