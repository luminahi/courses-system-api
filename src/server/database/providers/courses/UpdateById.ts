import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../seeds/ETableNames.js";
import { ICourse } from "../../models/Course.js";

const updateById = async (
    id: number,
    data: Omit<ICourse, "id">
): Promise<void> => {
    try {
        const result = await Knex(ETableNames.course)
            .where({ id })
            .update({ name: data.name });
        if (result === 0) throw new Error("error updating course");
        return;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    throw new Error("Critical Error");
};

export { updateById };
