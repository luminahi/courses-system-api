import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { QueryRequest } from "index.js";
import { ICourse } from "../../models/Course.js";
import { Result } from "../../../shared/util/Result.js";

const getAll = async (
    query: Required<QueryRequest>
): Promise<Result<ICourse[] | null>> => {
    try {
        const result = await Knex(ETableNames.course)
            .select("id", "name")
            .limit(query.size)
            .offset((query.page - 1) * query.size);

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { getAll };
