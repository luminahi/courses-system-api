import { Router } from "express";
import { UsersController } from "../controllers/users/index.js";
import {
    signInValidation,
    signUpValidation,
} from "../shared/middlewares/validations/user/index.js";

const router = Router();

router.post("/signup", signUpValidation, UsersController.signUp);
router.post("/signin", signInValidation, UsersController.signIn);

export { router as userRouter };
