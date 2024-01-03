import { Knex } from "../../knex/index.js";
import { ITeacher } from "../../models/Teacher.js";
import { ETableNames } from "../../ETableNames.js";

const create = async (teacher: Omit<ITeacher, "id">): Promise<number> => {
    try {
        const [result] = await Knex(ETableNames.teacher)
            .insert(teacher)
            .returning("id");
        if (typeof result === "object") {
            return result.id;
        } else if (typeof result === "number") {
            return result;
        }
        throw new Error("Error when registering new teacher");
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err.message);
            throw err;
        }
        throw new Error("Critical error");
    }
};

export { create };
