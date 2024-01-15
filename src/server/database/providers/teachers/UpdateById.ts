import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ITeacher } from "../../models/Teacher.js";
import { Optional } from "../../../shared/util/Optional.js";

const updateById = async (
    teacher: ITeacher
): Promise<Optional<number | null>> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .where({ id: teacher.id })
            .update({ ...teacher });

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { updateById };
