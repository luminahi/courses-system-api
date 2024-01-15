import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { QueryRequest } from "index.js";
import { ITeacher } from "../../models/Teacher.js";
import { Optional } from "../../../shared/util/Optional.js";

const getAll = async (
    query: Required<QueryRequest>
): Promise<Optional<ITeacher[] | null>> => {
    try {
        const result = await Knex(ETableNames.teacher)
            .select("*")
            .limit(query.size)
            .offset((query.page - 1) * query.size);

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { getAll };
