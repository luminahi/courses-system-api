import { RequestHandler } from "express";
import { CoursesProvider } from "src/server/database/providers/courses/index.js";

type idParam = { id: number };

const deleteById: RequestHandler = async (req, res) => {
    try {
        const result = await CoursesProvider.deleteById(
            <idParam>(<unknown>req.params)
        );
        if (result !== 1) throw new Error("not found");
        return res.status(200).json({ default: "course deleted" });
    } catch {
        return res.status(404).json({ default: "not found" });
    }
};

export { deleteById };
