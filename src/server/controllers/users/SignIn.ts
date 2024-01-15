import { NextFunction, Request, Response } from "express";
import { UsersProvider } from "../../database/providers/users/index.js";
import { verifyPassword } from "../../shared/services/PasswordCrypto.js";
import { generateAccessToken } from "../../shared/services/JWTService.js";
import { Result } from "../../shared/util/Result.js";

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const result = await UsersProvider.getByEmail(email);
    if (result.isEmpty()) return next(result);

    const isValid = await verifyPassword(password, result.get()!.password);
    if (!isValid) return next(Result.empty());

    const accessToken = generateAccessToken({ email, iat: Date.now() });
    if (accessToken.isPresent())
        return res.status(200).json({ accessToken: accessToken.get() });

    return next(accessToken);
};

export { signIn };
