import { Knex } from "../../knex/index.js";
import { ETableNames } from "../../ETableNames.js";
import { QueryRequest } from "index.js";
import { ICourse } from "../../models/Course.js";
import { Optional } from "../../../shared/util/Optional.js";

const getAll = async (
    query: Required<QueryRequest>
): Promise<Optional<ICourse[] | null>> => {
    try {
        const result = await Knex(ETableNames.course)
            .select("id", "name")
            .limit(query.size)
            .offset((query.page - 1) * query.size);

        return Optional.ofNullable(result);
    } catch (err: unknown) {
        return Optional.empty();
    }
};

export { getAll };
