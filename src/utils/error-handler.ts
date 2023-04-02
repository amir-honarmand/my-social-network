export class BaseError extends Error {
    constructor(
        public name: string,
        public status: number,
        public description: string,
        public isOperational: boolean = true,
    ) {
        super(description)

        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.status = status;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
}