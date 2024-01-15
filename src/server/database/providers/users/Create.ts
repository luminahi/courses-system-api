import { Knex } from "../../knex/index.js";
import { IUser } from "../../models/index.js";
import { ETableNames } from "../../ETableNames.js";
import { ServerError } from "../../../shared/errors/index.js";
import { hashPassword } from "../../../shared/services/PasswordCrypto.js";

const create = async (user: Omit<IUser, "id">): Promise<number> => {
    try {
        const hashedPassword = await hashPassword(user.password);
        const [result] = await Knex(ETableNames.user)
            .insert({
                email: user.email,
                name: user.name,
                password: hashedPassword,
            })
            .returning("id");

        if (typeof result === "object") {
            return result.id;
        } else if (typeof result === "number") {
            return result;
        }

        throw new ServerError("error registering new user");
    } catch (err: unknown) {
        if (err instanceof ServerError) throw err;
        if (err instanceof Error) throw new ServerError(err.message);
        throw new ServerError("critical error");
    }
};

export { create };
