import * as yup from "yup";
import { RequestHandler } from "express";
import { ITeacher } from "../../../../database/models/index.js";

const bodySchema: yup.Schema<Omit<ITeacher, "id">> = yup.object().shape({
    firstName: yup.string().max(32).required().nonNullable(),
    lastName: yup.string().max(32).required().nonNullable(),
    email: yup.string().max(64).required().nonNullable(),
    courseId: yup.number().moreThan(0).required().nonNullable(),
});

const bodyValidation: RequestHandler = async (req, res, next) => {
    try {
        await bodySchema.validate(req.body, {
            abortEarly: false,
        });
        next();
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            return res.status(400).json({ errors: { ...err.errors } });
        }
    }
};

export { bodyValidation };
