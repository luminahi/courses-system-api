import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/index.js";
import { ETableNames } from "../../ETableNames.js";
import { Result } from "../../../shared/util/Result.js";

const create = async (
    course: Omit<ICourse, "id">
): Promise<Result<ICourse | null>> => {
    try {
        const [result] = await Knex(ETableNames.course)
            .insert(course)
            .returning("id");

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { create };
