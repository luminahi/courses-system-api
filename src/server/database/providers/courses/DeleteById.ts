import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../seeds/ETableNames.js";

const deleteById = async (course: { id: number }): Promise<number> => {
    try {
        const result = await Knex(ETableNames.course)
            .delete()
            .where({ id: course.id });
        if (result === 0) throw new Error("not found");
        return result;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    throw new Error("Critical Error");
};

export { deleteById };
