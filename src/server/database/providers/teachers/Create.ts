import { Knex } from "../../knex/index.js";
import { ITeacher } from "../../models/Teacher.js";
import { ETableNames } from "../../ETableNames.js";
import {
    DataError,
    InternalError,
    ServerError,
} from "../../../shared/errors/index.js";

const create = async (teacher: Omit<ITeacher, "id">): Promise<number> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .insert(teacher)
            .returning("id");

        if (typeof result[0] === "object") {
            return result[0].id;
        } else if (typeof result === "number") {
            return result[0];
        }
        throw new DataError("error registering new teacher");
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { create };
