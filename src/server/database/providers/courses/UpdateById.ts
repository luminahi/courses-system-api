import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ICourse } from "../../models/Course.js";
import { Optional } from "../../../shared/util/Optional.js";

const updateById = async (
    course: ICourse
): Promise<Optional<number | null>> => {
    try {
        const result = await Knex(ETableNames.course)
            .where({ id: course.id })
            .update({ ...course });

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { updateById };
