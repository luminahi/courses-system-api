import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { IUser } from "../../models/index.js";
import { Result } from "../../../shared/util/Result.js";

const getByEmail = async (email: string): Promise<Result<IUser | null>> => {
    try {
        const result = await Knex(ETableNames.user)
            .select("*")
            .where({ email })
            .first();

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { getByEmail };
