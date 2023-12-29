import * as yup from "yup";
import { RequestHandler } from "express";

const paramsSchema: yup.Schema<{ id: number }> = yup.object().shape({
    id: yup.number().integer().min(1).required(),
});

const paramsValidation: RequestHandler = async (req, res, next) => {
    try {
        await paramsSchema.validate(req.params);
        next();
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            return res.status(400).json({ errors: { ...err.errors } });
        }
    }
};

export { paramsValidation };
