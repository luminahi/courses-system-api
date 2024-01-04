import { ICourse, ITeacher, IUser } from "../../models/index.js";

declare module "knex/types/tables" {
    interface Tables {
        course: ICourse;
        teacher: ITeacher;
        user: IUser;
    }
}
