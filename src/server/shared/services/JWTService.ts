import jwt from "jsonwebtoken";
import { DataError, InternalError, ServerError } from "../errors/index.js";

interface ISignUser {
    email: string;
    iat: number;
}

const generateAccessToken = (data: ISignUser): string => {
    try {
        if (!process.env.JWT_SECRET)
            throw new DataError("jwt secret undefined");

        const token = jwt.sign(data, process.env.JWT_SECRET, {
            algorithm: "HS256",
        });

        return token;
    } catch (err: unknown) {
        if (err instanceof ServerError) throw new DataError(err.message);
        if (err instanceof Error) throw new ServerError(err.message);
        throw new InternalError("internal error");
    }
};

const verifyAccessToken = (token: string) => {
    if (!process.env.JWT_SECRET) return;
    const c = jwt.verify(token, process.env.JWT_SECRET);
    console.log(c);
};

export { generateAccessToken, verifyAccessToken };
