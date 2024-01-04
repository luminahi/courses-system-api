import { Response } from "express";
import { ServerError } from "./ServerError.js";

const errorHandler = (err: unknown, res: Response) => {
    if (err instanceof ServerError) {
        res.status(err.errorCode).json({ error: err.message });
    }
};

export { errorHandler };
