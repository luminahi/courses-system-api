import { RequestHandler } from "express";
import { UsersProvider } from "../../database/providers/users/index.js";
import { errorHandler, AuthError } from "../../shared/errors/index.js";
import { verifyPassword } from "../../shared/services/PasswordCrypto.js";
import { generateAccessToken } from "../../shared/services/JWTService.js";

const signIn: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UsersProvider.getByEmail(email);

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new AuthError("invalid email or password");

        const accessToken = generateAccessToken({ email, iat: Date.now() });

        return res.status(200).json({ accessToken });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { signIn };
