import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/Course.js";
import { ETableNames } from "../../ETableNames.js";

const getById = async (id: number): Promise<ICourse> => {
    try {
        const result: ICourse = await Knex(ETableNames.course)
            .select("id", "name")
            .where({ id })
            .first();
        if (
            !result ||
            typeof result.id !== "number" ||
            typeof result.name !== "string"
        )
            throw new Error("error at getting course");
        return result;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    throw new Error("Critical Error");
};

export { getById };
