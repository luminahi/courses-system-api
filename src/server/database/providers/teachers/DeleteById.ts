import { ETableNames } from "../../ETableNames.js";
import { Knex } from "../../knex/index.js";
import { Result } from "../../../shared/util/Result.js";

const deleteById = async (id: number): Promise<Result<number | null>> => {
    try {
        const result = await Knex(ETableNames.teacher).delete().where({ id });

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { deleteById };
