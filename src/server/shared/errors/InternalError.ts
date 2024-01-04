import { ServerError } from "./ServerError.js";

class InternalError extends ServerError {
    constructor(message: string, errorCode: number = 500) {
        super(message, errorCode);
        this.name = this.constructor.name;
    }
}

export { InternalError };
