import { Knex } from "../../knex/index.js";
import { IUser } from "../../models/index.js";
import { ETableNames } from "../../ETableNames.js";
import {
    DataError,
    InternalError,
    ServerError,
} from "../../../shared/errors/index.js";

const create = async (user: Omit<IUser, "id">): Promise<number> => {
    try {
        const [result] = await Knex(ETableNames.user)
            .insert(user)
            .returning("id");

        if (typeof result === "object") {
            return result.id;
        } else if (typeof result === "number") {
            return result;
        }
        throw new DataError("error registering new user");
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { create };
