/**
 * Simple implementation of Java's utility class Optional
 */
class Optional<T> {
    public readonly value: T;

    private constructor(value: T) {
        this.value = value;
    }

    public get(): T {
        return this.value;
    }

    /**
     *
     * @returns it checks if the Optional wrapped value is a valid object
     */
    public isPresent(): boolean {
        return this.value !== null && this.value !== undefined ? true : false;
    }

    /**
     *
     * @returns it checks if the Optional wrapped value is a invalid object
     */
    public isEmpty(): boolean {
        return this.value === null || this.value === undefined ? true : false;
    }

    /**
     *
     * @returns a empty Optional instance
     */
    public static empty(): Optional<null> {
        return new Optional(null);
    }

    /**
     *
     * @param {any} value - the value to be wrapped in an Optional.
     * @returns {Optional<any>} an Optional instance containing the specified value
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static ofNullable(value: any): Optional<any> {
        return new Optional(value);
    }
}

export { Optional };
