import { ICourse } from "../../models";

declare module "knex/types/tables" {
    interface Tables {
        course: ICourse;
    }
}
