import { create } from "./Create.js";
import { getById } from "./GetById.js";
import { deleteById } from "./DeleteById.js";
import { getAll } from "./GetAll.js";
import { updateById } from "./UpdateById.js";
import { count } from "./Count.js";

export const CoursesProvider = {
    create,
    getById,
    deleteById,
    getAll,
    updateById,
    count,
};
