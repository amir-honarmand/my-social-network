"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncaughtException = void 0;
const http_status_code_1 = require("../shared/http-status-code");
const error_handler_1 = require("./error-handler");
const uncaughtException = (err, req, res, next) => {
    console.error(err.stack);
    const code = err?.status || http_status_code_1.HttpStatusCodes.INTERNAL_SERVER;
    const message = err?.message || http_status_code_1.HttpStatusMessages.INTERNAL_SERVER;
    res.status(code).send(message);
};
exports.uncaughtException = uncaughtException;
process.on('uncaughtException', error => {
    console.error(error);
    if (error instanceof error_handler_1.BaseError) {
        return error;
    }
    ;
    process.exit(1);
});
process.on('unhandledRejection', error => {
    throw error;
});
//# sourceMappingURL=uncaught-exception.js.map