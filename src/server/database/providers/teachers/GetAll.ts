import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { QueryRequest } from "../../../shared/types/sharedTypes.js";
import { ITeacher } from "../../models/Teacher.js";

const getAll = async (query: QueryRequest): Promise<ITeacher[]> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .select("id", "firstName", "lastName", "email")
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
