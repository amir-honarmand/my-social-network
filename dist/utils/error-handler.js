"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(name, status, description, isOperational = true) {
        super(description);
        this.name = name;
        this.status = status;
        this.description = description;
        this.isOperational = isOperational;
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.status = status;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=error-handler.js.map