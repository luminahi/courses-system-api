import { ErrorRequestHandler } from "express";
import { Result } from "../../util/Result";

const userErrorHandler: ErrorRequestHandler = (
    err: Result<null>,
    req,
    res,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next
) => {
    if (err.isError())
        return res.status(err.errorCode!).json({ error: err.errorMessage });
    return res.status(401).json({ error: "user or password invalid" });
};

export { userErrorHandler };
