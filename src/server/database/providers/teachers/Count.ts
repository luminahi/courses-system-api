import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import {
    DataError,
    InternalError,
    ServerError,
} from "../../../shared/errors/index.js";

const count = async (): Promise<number> => {
    try {
        const [result] = await Knex(ETableNames.teacher).count();
        const total = Number(result["count(*)"]);

        if (typeof total !== "number")
            throw new DataError("error getting number of teachers");

        return total;
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { count };
