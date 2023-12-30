import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { ParamsRequest } from "../../shared/@types/sharedTypes.js";

const deleteById: RequestHandler = async (req, res) => {
    try {
        const result = await CoursesProvider.deleteById(
            (<unknown>req.params) as ParamsRequest
        );
        if (result !== 1) throw new Error("not found");
        return res.status(200).json({ default: "course deleted" });
    } catch {
        return res.status(404).json({ default: "not found" });
    }
};

export { deleteById };
