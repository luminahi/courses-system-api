import * as yup from "yup";
import { RequestHandler } from "express";

interface ICourse {
    id: string;
    name: string;
}

const courseBodyValidation: yup.Schema<ICourse> = yup.object().shape({
    id: yup.string().required(),
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
