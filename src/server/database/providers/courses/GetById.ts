import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/Course.js";
import { ETableNames } from "../../ETableNames.js";
import { Optional } from "../../../shared/util/Optional.js";

const getById = async (id: number): Promise<Optional<ICourse | null>> => {
    try {
        const result = await Knex(ETableNames.course)
            .select("*")
            .where({ id })
            .first();

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { getById };
