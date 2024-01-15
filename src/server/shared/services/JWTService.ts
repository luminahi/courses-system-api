import jwt from "jsonwebtoken";
import { AuthError, ServerError } from "../errors/index.js";

interface ISignUser {
    email?: string;
    iat?: number;
    exp?: number;
}

const generateAccessToken = (data: ISignUser): string => {
    try {
        if (!process.env.JWT_SECRET)
            throw new ServerError("jwt secret undefined");

        const token = jwt.sign(data, process.env.JWT_SECRET, {
            algorithm: "HS256",
            expiresIn: 3_600_000,
        });

        return token;
    } catch (err: unknown) {
        if (err instanceof AuthError) throw err;
        if (err instanceof Error) throw new ServerError(err.message);
        throw new ServerError("internal error");
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
        if (err instanceof Error) throw new ServerError(err.message);
        throw new ServerError("internal error");
    }
};

export { generateAccessToken, verifyAccessToken };
