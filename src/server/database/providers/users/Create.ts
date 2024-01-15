import { Knex } from "../../knex/index.js";
import { IUser } from "../../models/index.js";
import { ETableNames } from "../../ETableNames.js";
import { hashPassword } from "../../../shared/services/PasswordCrypto.js";
import { Result } from "../../../shared/util/Result.js";

const create = async (
    user: Omit<IUser, "id">
): Promise<Result<Pick<IUser, "id"> | null>> => {
    try {
        const hashedPassword = await hashPassword(user.password);
        const [result] = await Knex(ETableNames.user)
            .insert({
                email: user.email,
                name: user.name,
                password: hashedPassword,
            })
            .returning("id");

        return Result.ofNullable(result);
    } catch (err: unknown) {
        if (err instanceof Error) return Result.asError(err.message, 500);
        return Result.asError("internal error", 500);
    }
};

export { create };
