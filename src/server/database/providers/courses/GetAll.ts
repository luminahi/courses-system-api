import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { QueryRequest } from "index.js";
import { ICourse } from "../../models/Course.js";
import {
    InternalError,
    DataError,
    ServerError,
} from "../../../shared/errors/index.js";

const getAll = async (query: Required<QueryRequest>): Promise<ICourse[]> => {
    try {
        const result = await Knex(ETableNames.course)
            .select("id", "name")
            .limit(query.size)
            .offset((query.page - 1) * query.size);

        if (!Array.isArray(result))
            throw new DataError("error at getting courses");

        return result;
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { getAll };
