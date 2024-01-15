import jwt from "jsonwebtoken";
import { AuthError, ServerError } from "../errors/index.js";
import { Result } from "../util/Result.js";

interface ISignUser {
    email?: string;
    iat?: number;
    exp?: number;
}

const generateAccessToken = (data: ISignUser): Result<string | null> => {
    try {
        if (!process.env.JWT_SECRET)
            throw new ServerError("jwt secret undefined");

        const token = jwt.sign(data, process.env.JWT_SECRET, {
            algorithm: "HS256",
            expiresIn: 3600000,
        });

        return Result.ofNullable(token);
    } catch (err: unknown) {
        if (err instanceof ServerError) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

const verifyAccessToken = (token: string): ISignUser => {
    try {
        if (!process.env.JWT_SECRET)
            throw new ServerError("jwt secret undefined");

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (typeof decoded === "string") throw new AuthError("invalid token");

        return decoded;
    } catch (err: unknown) {
        if (err instanceof AuthError) throw err;
        if (err instanceof ServerError) throw new ServerError(err.message);
        throw new ServerError("internal error");
    }
};

export { generateAccessToken, verifyAccessToken };
