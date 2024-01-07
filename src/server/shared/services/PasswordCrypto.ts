import bcrypt from "bcryptjs";
import { DataError } from "../errors/index.js";

const hashPassword = async (password: string) => {
    let hashedPassword = "";

    try {
        const salt = await bcrypt.genSalt();
        hashedPassword = await bcrypt.hash(password, salt);
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new DataError(err.message);
        }
    }

    return hashedPassword;
};

const verifyPassword = async (password: string, hashedPassword: string) => {
    try {
        const result = await bcrypt.compare(password, hashedPassword);
        return result;
    } catch (err: unknown) {
        if (err instanceof Error) {
            throw new DataError(err.message);
        }
    }
};

export { hashPassword, verifyPassword };
