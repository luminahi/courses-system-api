import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ICourse } from "../../models/Course.js";
import { Result } from "../../../shared/util/Result.js";

const updateById = async (course: ICourse): Promise<Result<number | null>> => {
    try {
        const result = await Knex(ETableNames.course)
            .where({ id: course.id })
            .update({ ...course });

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { updateById };
