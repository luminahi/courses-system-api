import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { QueryRequest } from "../../../shared/types/sharedTypes.js";
import { ITeacher } from "../../models/Teacher.js";
import {
    InternalError,
    DataError,
    ServerError,
} from "../../../shared/errors/index.js";

const getAll = async (query: QueryRequest): Promise<ITeacher[]> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .select("*")
            .limit(query.size)
            .offset((query.page - 1) * query.size);

        if (!Array.isArray(result))
            throw new DataError("error getting teachers");

        return result;
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { getAll };
