import * as yup from "yup";
import { RequestHandler } from "express";
import { IUser } from "../../../../database/models/index.js";

const bodySchema: yup.Schema<Omit<IUser, "id">> = yup.object().shape({
    name: yup.string().min(1).max(64).required().nonNullable(),
    email: yup.string().min(5).max(96).required().nonNullable().email(),
    password: yup.string().min(8).max(64).required().nonNullable(),
});

const signUpValidation: RequestHandler = async (req, res, next) => {
    try {
        await bodySchema.validate(req.body, {
            abortEarly: false,
        });

        next();
    } catch (err: unknown) {
        if (err instanceof yup.ValidationError)
            return res.status(400).json({ errors: { ...err.errors } });
    }
};

export { signUpValidation };
