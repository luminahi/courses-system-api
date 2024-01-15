import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/Course.js";
import { ETableNames } from "../../ETableNames.js";
import { Result } from "../../../shared/util/Result.js";

const getById = async (id: number): Promise<Result<ICourse | null>> => {
    try {
        const result = await Knex(ETableNames.course)
            .select("*")
            .where({ id })
            .first();

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { getById };
