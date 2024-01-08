import { Response } from "express";
import { ServerError } from "./ServerError.js";

const errorHandler = (err: unknown, res: Response) => {
    if (err instanceof ServerError)
        return res.status(err.errorCode).json({ error: err.message });
    if (err instanceof Error)
        return res.status(500).json({ default: err.message });
};

export { errorHandler };
