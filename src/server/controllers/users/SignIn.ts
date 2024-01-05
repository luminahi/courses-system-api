import { RequestHandler } from "express";
import { UsersProvider } from "../../database/providers/users/index.js";
import { errorHandler, AuthError } from "../../shared/errors/index.js";

const signIn: RequestHandler = async (req, res) => {
    try {
        const result = await UsersProvider.getByEmail(req.body.email);
        if (req.body.password !== result.password)
            throw new AuthError("invalid email or password");

        return res.status(200).json({
            default: "hello there",
            data: { email: result.email, name: result.name },
        });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { signIn };
