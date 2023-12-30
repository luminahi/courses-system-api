import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../seeds/ETableNames.js";
import {
    QueryRequest,
    QueryResponse,
} from "../../../shared/@types/sharedTypes.js";

const getAll = async (query: QueryRequest): Promise<QueryResponse> => {
    try {
        const [total] = await Knex(ETableNames.course).count();
        const result = await Knex(ETableNames.course)
            .select("id", "name")
            .limit(query.size)
            .offset((query.page - 1) * query.size);
        const queryResult = {
            total: Number(total["count(*)"]),
            page: Number(query.page),
            size: Number(query.size),
            items: result,
        };
        if (!(result instanceof Array))
            throw new Error("something unexpected happened");
        return queryResult;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    throw new Error("Critical Error");
};

export { getAll };
