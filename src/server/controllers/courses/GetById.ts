import { RequestHandler } from "express";
import { CoursesProvider } from "../../database/providers/courses/index.js";
import { ParamsRequest } from "../../../server/shared/@types/sharedTypes.js";

const getById: RequestHandler = async (req, res) => {
    try {
        const result = await CoursesProvider.getById(
            (<unknown>req.params) as ParamsRequest
        );
        return res.status(200).json({ result });
    } catch (err) {
        return res.status(404).json({ result: "not found" });
    }
};

export { getById };
