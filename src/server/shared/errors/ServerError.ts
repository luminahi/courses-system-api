class ServerError extends Error {
    public errorCode: number;

    constructor(
        message: string,
        errorCode: number = 500,
        options?: ErrorOptions
    ) {
        super(message, options);
        this.name = this.constructor.name;
        this.errorCode = errorCode;
    }
}

export { ServerError };
