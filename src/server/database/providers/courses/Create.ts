import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/index.js";
import { ETableNames } from "../../ETableNames.js";

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
        throw new Error("Error when registering new course");
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            throw err;
        }
        throw new Error("Critical error");
    }
};

export { create };
