import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { Optional } from "../../../shared/util/Optional.js";

const deleteById = async (id: number): Promise<Optional<number | null>> => {
    try {
        const result = await Knex(ETableNames.course).delete().where({ id });

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { deleteById };
