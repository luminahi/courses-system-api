import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ITeacher } from "../../models/Teacher.js";
import { Optional } from "../../../shared/util/Optional.js";

const getById = async (id: number): Promise<Optional<ITeacher | null>> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .select("*")
            .where({ id })
            .first();

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { getById };
