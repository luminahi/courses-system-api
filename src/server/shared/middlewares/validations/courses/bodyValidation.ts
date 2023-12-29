import * as yup from "yup";
import { ICourse } from "src/server/database/models";
import { RequestHandler } from "express";

const bodySchema: yup.Schema<Omit<ICourse, "id">> = yup.object().shape({
    name: yup.string().required(),
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
