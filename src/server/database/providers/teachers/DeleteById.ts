import { ETableNames } from "../../ETableNames.js";
import { Knex } from "../../knex/index.js";
import { Optional } from "../../../shared/util/Optional.js";

const deleteById = async (id: number): Promise<Optional<number | null>> => {
    try {
        const result = await Knex(ETableNames.teacher).delete().where({ id });

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { deleteById };
