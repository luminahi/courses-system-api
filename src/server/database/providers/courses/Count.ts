import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { Optional } from "../../../shared/util/Optional.js";

const count = async (): Promise<Optional<number | null>> => {
    try {
        const [result] = await Knex(ETableNames.course).count();
        const total = Number(result["count(*)"]);

        return Optional.ofNullable(total);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { count };
