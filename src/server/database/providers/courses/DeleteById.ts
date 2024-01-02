import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";

const deleteById = async (id: number): Promise<void> => {
    try {
        const result = await Knex(ETableNames.course).delete().where({ id });
        if (result === 0) throw new Error("error deleting course");
        return;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    throw new Error("Critical Error");
};

export { deleteById };
