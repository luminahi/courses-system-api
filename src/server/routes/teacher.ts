import { Router } from "express";
import { TeachersController } from "../controllers/teachers/index.js";
import { bodyValidation } from "../shared/middlewares/validations/teachers/bodyValidation.js";
import { queryValidation } from "../shared/middlewares/validations/queryValidation.js";

const router = Router();

router.post("/", bodyValidation, TeachersController.create);
router.get("/", queryValidation, TeachersController.getAll);

export { router as teacherRouter };
