import { Router } from "express";
// import { TeachersController } from "../controllers/teachers";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("teacher route");
});

export { router as teacherRouter };
