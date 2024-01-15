import { Knex } from "../../knex/index.js";
import { ITeacher } from "../../models/Teacher.js";
import { ETableNames } from "../../ETableNames.js";
import { Optional } from "../../../shared/util/Optional.js";

const create = async (
    teacher: Omit<ITeacher, "id">
): Promise<Optional<ITeacher | null>> => {
    try {
        const [result] = await Knex(ETableNames.teacher)
            .insert(teacher)
            .returning("id");

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { create };
