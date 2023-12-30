import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const updateById: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error("bad param");
        await CoursesProvider.updateById(Number(id), req.body);
        return res.status(200).json({ default: "course updated" });
    } catch (err: unknown) {
        if (err instanceof Error)
            return res.status(404).json({ error: err.message });
    }
};

export { updateById };
