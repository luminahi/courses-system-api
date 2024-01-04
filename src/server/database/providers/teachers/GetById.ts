import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ITeacher } from "../../models/Teacher.js";
import {
    DataError,
    InternalError,
    NotFoundError,
    ServerError,
} from "../../../shared/errors/index.js";

const getById = async (id: number): Promise<ITeacher> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .select("*")
            .where({ id })
            .first();

        if (!result) throw new NotFoundError("teacher not found");

        return result;
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { getById };
