import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ITeacher } from "../../models/Teacher.js";
import { Result } from "../../../shared/util/Result.js";

const getById = async (id: number): Promise<Result<ITeacher | null>> => {
    try {
        const result = await Knex(ETableNames.teacher)
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
