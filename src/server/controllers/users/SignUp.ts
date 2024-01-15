import { Request, Response, NextFunction } from "express";
import { UsersProvider } from "../../database/providers/users/index.js";

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const result = await UsersProvider.create(req.body);
    if (result.isPresent())
        return res
            .status(201)
            .json({ default: `id ${result.get()?.id} created` });
    return next(result);
};

export { signUp };
