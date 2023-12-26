import * as yup from "yup";
import { ICourse } from "src/server/database/models";
import { RequestHandler } from "express";

const courseBodyValidation: yup.Schema<Omit<ICourse, "id">> = yup
    .object()
    .shape({
        name: yup.string().required(),
    });

const courseBodyDataValidation: RequestHandler = async (req, res, next) => {
    try {
        const body = await courseBodyValidation.validate(req.body, {
            abortEarly: false,
        });
        console.log(body);
        next();
    } catch (e) {
        if (e instanceof yup.ValidationError) {
            return res.status(400).json({ errors: { ...e.errors } });
        }
    }
};

export { courseBodyDataValidation };
