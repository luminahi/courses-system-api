import { RequestHandler } from "express";
import {} from "../../services/JWTService.js";

const accessControl: RequestHandler = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "not authorized" });
    }

    const [identifier, token] = authorization.split(" ");
    if (identifier !== "Bearer") {
        return res.status(401).json({ error: "not authorized" });
    }

    if (token !== "hello.there.test") {
        return res.status(401).json({ error: "not authorized" });
    }

    next();
};

export { accessControl };
