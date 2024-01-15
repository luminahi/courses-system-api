import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { Result } from "../../../shared/util/Result.js";

const count = async (): Promise<Result<number | null>> => {
    try {
        const [result] = await Knex(ETableNames.course).count();
        const total = Number(result["count(*)"]);

        return Result.ofNullable(total);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { count };
