import { RequestHandler } from "express";
import { verifyAccessToken } from "../../services/JWTService.js";
import { ServerError } from "../../errors/ServerError.js";
import { AuthError } from "../../errors/AuthError.js";
import { errorHandler } from "../../errors/ErrorHandler.js";

const accessControl: RequestHandler = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "not authorized" });
    }

    const [identifier, token] = authorization.split(" ");
    if (identifier !== "Bearer") {
        return res.status(401).json({ error: "not authorized" });
    }

    try {
        const payload = verifyAccessToken(token);
        if (!payload.exp) throw new AuthError("invalid token");
        if (Date.now() > payload.exp) throw new ServerError("token expired");
        return next();
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { accessControl };
