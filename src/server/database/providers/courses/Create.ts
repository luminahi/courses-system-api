import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/index.js";
import { ETableNames } from "../../ETableNames.js";
import {
    DataError,
    InternalError,
    ServerError,
} from "../../../shared/errors/index.js";

const create = async (course: Omit<ICourse, "id">): Promise<number> => {
    try {
        const [result] = await Knex(ETableNames.course)
            .insert(course)
            .returning("id");

        if (typeof result === "object") {
            return result.id;
        } else if (typeof result === "number") {
            return result;
        }
        throw new DataError("error registering new course");
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { create };
