import { Router } from "express";
import { CoursesController } from "../controllers/courses/index.js";
import { courseBodyDataValidation } from "../shared/middlewares/CourseValidation.js";
import { paramsValidation } from "../shared/middlewares/validations/courses/paramsValidation.js";

const router = Router();

router.post("/", courseBodyDataValidation, CoursesController.create);
router.get("/", CoursesController.getAll);
router.get("/:id", paramsValidation, CoursesController.getById);
router.put("/:id", CoursesController.updateById);
router.delete("/:id", CoursesController.deleteById);

export { router as courseRouter };
