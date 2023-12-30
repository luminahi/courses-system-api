import * as yup from "yup";
import { RequestHandler } from "express";
import { ParamsRequest } from "../../../@types/sharedTypes.js";

const paramsSchema: yup.Schema<ParamsRequest> = yup.object().shape({
    id: yup.number().integer().moreThan(0).required(),
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
