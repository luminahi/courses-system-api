import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";

const count = async (): Promise<number> => {
    try {
        const [result] = await Knex(ETableNames.teacher).count();
        const total = Number(result["count(*)"]);
        return total;
    } catch (err: unknown) {
        if (err instanceof Error) throw err;
    }
    throw new Error("Critical Error");
};

export { count };
