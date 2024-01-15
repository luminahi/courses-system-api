import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ITeacher } from "../../models/Teacher.js";
import { Result } from "../../../shared/util/Result.js";

const updateById = async (
    teacher: ITeacher
): Promise<Result<number | null>> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .where({ id: teacher.id })
            .update({ ...teacher });

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { updateById };
