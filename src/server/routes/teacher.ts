import { Router } from "express";
import { TeachersController } from "../controllers/teachers/index.js";
import { bodyValidation } from "../shared/middlewares/validations/teacher/bodyValidation.js";
import { queryValidation } from "../shared/middlewares/validations/queryValidation.js";
import { paramsValidation } from "../shared/middlewares/validations/paramsValidation.js";

const router = Router();

router.post("/", bodyValidation, TeachersController.create);
router.get("/", queryValidation, TeachersController.getAll);
router.get("/:id", paramsValidation, TeachersController.getById);
router.put(
    "/:id",
    paramsValidation,
    bodyValidation,
    TeachersController.updateById
);
router.delete("/:id", paramsValidation, TeachersController.deleteById);

export { router as teacherRouter };
