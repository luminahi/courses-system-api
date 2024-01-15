import { Knex } from "../../knex/index.js";
import { ITeacher } from "../../models/Teacher.js";
import { ETableNames } from "../../ETableNames.js";
import { Result } from "../../../shared/util/Result.js";

const create = async (
    teacher: Omit<ITeacher, "id">
): Promise<Result<ITeacher | null>> => {
    try {
        const [result] = await Knex(ETableNames.teacher)
            .insert(teacher)
            .returning("id");

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { create };
