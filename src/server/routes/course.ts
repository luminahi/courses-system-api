import { Router } from "express";
import { CoursesController } from "../controllers/courses/index.js";
import { bodyValidation } from "../shared/middlewares/validations/courses/bodyValidation.js";
import { paramsValidation } from "../shared/middlewares/validations/courses/paramsValidation.js";
import { queryValidation } from "../shared/middlewares/validations/courses/queryValidation.js";

const router = Router();

router.post("/", bodyValidation, CoursesController.create);
router.get("/", queryValidation, CoursesController.getAll);
router.get("/:id", paramsValidation, CoursesController.getById);
router.put("/:id", paramsValidation, CoursesController.updateById);
router.delete("/:id", paramsValidation, CoursesController.deleteById);

export { router as courseRouter };
