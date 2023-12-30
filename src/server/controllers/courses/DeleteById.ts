import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";

const deleteById: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) throw new Error("bad param");
        await CoursesProvider.deleteById(Number(id));
        return res.status(200).json({ default: "course deleted" });
    } catch (err: unknown) {
        if (err instanceof Error)
            return res.status(404).json({ error: err.message });
    }
};

export { deleteById };
