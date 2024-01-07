import { RequestHandler } from "express";
import { UsersProvider } from "../../database/providers/users/index.js";
import { errorHandler, AuthError } from "../../shared/errors/index.js";
import { verifyPassword } from "../../shared/services/PasswordCrypto.js";

const signIn: RequestHandler = async (req, res) => {
    try {
        const user = await UsersProvider.getByEmail(req.body.email);
        const isValid = await verifyPassword(req.body.password, user.password);
        if (!isValid) throw new AuthError("invalid email or password");

        return res.status(200).json({ accessToken: "hello.there.token" });
    } catch (err: unknown) {
        errorHandler(err, res);
    }
};

export { signIn };
