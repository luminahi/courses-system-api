import bcrypt from "bcryptjs";
import { ServerError } from "../errors/index.js";

const hashPassword = async (password: string) => {
    let hashedPassword = "";

    try {
        const salt = await bcrypt.genSalt();
        hashedPassword = await bcrypt.hash(password, salt);
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new ServerError(err.message);
        }
    }

    return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
};

export { hashPassword, verifyPassword };
