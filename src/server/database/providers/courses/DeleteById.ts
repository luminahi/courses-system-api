import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import {
    DataError,
    ServerError,
    InternalError,
    NotFoundError,
} from "../../../shared/errors/index.js";

const deleteById = async (id: number): Promise<void> => {
    try {
        const result = await Knex(ETableNames.course).delete().where({ id });

        if (typeof result !== "number")
            throw new DataError("error deleting course");
        if (result === 0) throw new NotFoundError("course not found");
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { deleteById };
