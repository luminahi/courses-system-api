import * as yup from "yup";
import { RequestHandler } from "express";
import { ITeacher } from "../../../../database/models/index.js";
import { ServerError, errorHandler } from "../../../errors/index.js";

const bodySchema: yup.Schema<Partial<Omit<ITeacher, "id">>> = yup
    .object()
    .shape({
        firstName: yup.string().min(1).max(32).optional().nonNullable(),
        lastName: yup.string().min(1).max(32).optional().nonNullable(),
        email: yup.string().min(3).max(64).optional().nonNullable(),
        courseId: yup.number().moreThan(0).optional().nonNullable(),
    });

const bodyValidation: RequestHandler = async (req, res, next) => {
    try {
        const bodyRes = await bodySchema.validate(req.body, {
            abortEarly: false,
        });

        if (Object.keys(bodyRes).length === 0)
            throw new ServerError("the request body is empty", 400);

        next();
    } catch (err: unknown) {
        if (err instanceof yup.ValidationError)
            return res.status(400).json({ errors: { ...err.errors } });
        errorHandler(err, res);
    }
};

export { bodyValidation };
