import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../seeds/ETableNames.js";

const getById = async (course: { id: number }): Promise<string | Error> => {
    try {
        const [result]: { name: string }[] = await Knex(ETableNames.course)
            .select("name")
            .where({ id: course.id });
        if (typeof result?.name !== "string")
            throw new Error("error at getting course");
        return result.name;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    return new Error("Critical Error");
};

export { getById };
