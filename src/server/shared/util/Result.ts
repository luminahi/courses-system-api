/**
 * Simple class based on Java's utility class Optional
 */
class Result<T> {
    public readonly value: T;
    public readonly errorMessage?: string;
    public readonly errorCode?: number;

    private constructor(value: T, errorMessage?: string, errorCode?: number) {
        this.value = value;
        this.errorMessage = errorMessage;
        this.errorCode = errorCode;
    }

    public get(): T {
        return this.value;
    }

    /**
     *
     * @returns it checks if the Result wrapped value is a valid object
     */
    public isPresent(): boolean {
        return this.value !== null && this.value !== undefined ? true : false;
    }

    /**
     *
     * @returns it checks if the Result wrapped value is a invalid object
     */
    public isEmpty(): boolean {
        return this.value === null || this.value === undefined ? true : false;
    }

    public isError(): boolean {
        if (this.isEmpty() && this.errorMessage && this.errorCode) return true;
        return false;
    }

    /**
     *
     * @returns a empty Result instance
     */
    public static empty(): Result<null> {
        return new Result(null);
    }

    public static asError(err: string, errorCode: number) {
        return new Result(null, err, errorCode);
    }

    /**
     *
     * @param {any} value - the value to be wrapped in an Result.
     * @returns {Result<any>} an Result instance containing the specified value
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static ofNullable(value: any): Result<any> {
        return new Result(value);
    }
}

export { Result };
