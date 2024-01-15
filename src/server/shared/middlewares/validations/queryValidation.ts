import * as yup from "yup";
import { RequestHandler } from "express";
import { QueryRequest } from "index.js";

const querySchema: yup.Schema<QueryRequest> = yup.object().shape({
    size: yup.number().integer().moreThan(0).default(5),
    page: yup.number().integer().moreThan(0).default(1),
});

const queryValidation: RequestHandler = async (req, res, next) => {
    try {
        (req.query as unknown) = await querySchema.validate(req.query);
        next();
    } catch (err) {
        if (err instanceof yup.ValidationError)
            return res.status(400).json({ errors: { ...err.errors } });
        return res.status(500).json({ error: "internal error" });
    }
};

export { queryValidation };
