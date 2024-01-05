import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/Course.js";
import { ETableNames } from "../../ETableNames.js";
import {
    DataError,
    InternalError,
    NotFoundError,
    ServerError,
} from "../../../shared/errors/index.js";

const getById = async (id: number): Promise<ICourse> => {
    try {
        const result = await Knex(ETableNames.course)
            .select("*")
            .where({ id })
            .first();
        if (!result) throw new NotFoundError("course not found");

        return result;
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { getById };
