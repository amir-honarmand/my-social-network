"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const response = (status, message, data, error = null) => {
    return {
        status,
        message,
        error,
        data
    };
};
exports.response = response;
//# sourceMappingURL=http-response.js.map