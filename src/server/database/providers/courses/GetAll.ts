import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { QueryRequest } from "../../../shared/@types/sharedTypes.js";
import { ICourse } from "../../models/Course.js";

const getAll = async (query: QueryRequest): Promise<ICourse[]> => {
    try {
        const result = await Knex(ETableNames.course)
            .select("id", "name")
            .limit(query.size)
            .offset((query.page - 1) * query.size);
        if (!Array.isArray(result))
            throw new Error("error at gettings courses");
        return result;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    throw new Error("Critical Error");
};

export { getAll };
