import { ServerError } from "./ServerError.js";

class AuthError extends ServerError {
    constructor(message: string, errorCode: number = 401) {
        super(message, errorCode);
        this.name = this.constructor.name;
    }
}

export { AuthError };
