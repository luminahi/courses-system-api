import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ICourse } from "../../models/Course.js";
import {
    NotFoundError,
    DataError,
    InternalError,
    ServerError,
} from "../../../shared/errors/index.js";

const updateById = async (course: ICourse): Promise<void> => {
    try {
        const result = await Knex(ETableNames.course)
            .where({ id: course.id })
            .update({ ...course });

        if (!result) throw new DataError("error updating course");
        if (result === 0) throw new NotFoundError("error updating course");
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new DataError(err.message);
        throw new InternalError("critical error");
    }
};

export { updateById };
