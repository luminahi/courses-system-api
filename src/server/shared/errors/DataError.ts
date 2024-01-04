import { ServerError } from "./ServerError.js";

class DataError extends ServerError {
    constructor(message: string, errorCode: number = 400) {
        super(message, errorCode);
        this.name = this.constructor.name;
    }
}

export { DataError };
