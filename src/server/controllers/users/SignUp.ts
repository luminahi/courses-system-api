import { RequestHandler } from "express";
import { UsersProvider } from "../../database/providers/users/index.js";
import { errorHandler } from "../../shared/errors/index.js";

const signUp: RequestHandler = async (req, res) => {
    try {
        const result = await UsersProvider.create(req.body);
        return res.status(201).json({ default: `id ${result} created` });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { signUp };
