import { ICourse, ITeacher } from "../../models/index.js";

declare module "knex/types/tables" {
    interface Tables {
        course: ICourse;
        teacher: ITeacher;
    }
}
