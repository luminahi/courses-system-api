import { ServerError } from "./ServerError.js";

class NotFoundError extends ServerError {
    constructor(message: string, errorCode: number = 404) {
        super(message, errorCode);
        this.name = this.constructor.name;
    }
}

export { NotFoundError };
