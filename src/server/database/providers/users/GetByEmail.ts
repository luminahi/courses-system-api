import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { IUser } from "../../models/index.js";
import {
    DataError,
    InternalError,
    AuthError,
    ServerError,
} from "../../../shared/errors/index.js";

const getByEmail = async (email: string): Promise<IUser> => {
    try {
        const result = await Knex(ETableNames.user)
            .select("*")
            .where({ email })
            .first();

        if (!result) throw new AuthError("invalid email or password");

        return result;
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { getByEmail };
