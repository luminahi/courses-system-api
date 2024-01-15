import { Knex } from "../../knex/index.js";
import { ICourse } from "../../models/index.js";
import { ETableNames } from "../../ETableNames.js";
import { Optional } from "../../../shared/util/Optional.js";

const create = async (
    course: Omit<ICourse, "id">
): Promise<Optional<ICourse | null>> => {
    try {
        const [result] = await Knex(ETableNames.course)
            .insert(course)
            .returning("id");

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { create };
