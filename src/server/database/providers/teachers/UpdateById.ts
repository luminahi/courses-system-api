import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ITeacher } from "../../models/Teacher.js";
import {
    NotFoundError,
    DataError,
    InternalError,
    ServerError,
} from "../../../shared/errors/index.js";

const updateById = async (teacher: ITeacher): Promise<void> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .where({ id: teacher.id })
            .update({ ...teacher });

        if (!result) throw new DataError("error updating course");
        if (result === 0) throw new NotFoundError("course not found");
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { updateById };
