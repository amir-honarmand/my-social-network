"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const http_response_1 = require("../../../utils/http-response");
const user_service_1 = require("../services/user.service");
const registerController = async (req, res) => {
    try {
        const data = await (0, user_service_1.register)(req.body);
        return res.status(http_status_code_1.httpStatusCodes.CREATED).json((0, http_response_1.response)(http_status_code_1.httpStatusCodes.CREATED, http_status_code_1.httpStatusMessages.CREATED, data));
    }
    catch (error) {
        return res.status(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER)
            .json((0, http_response_1.response)(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER, error?.name || http_status_code_1.httpStatusMessages.INTERNAL_SERVER, null, error));
    }
};
exports.registerController = registerController;
//# sourceMappingURL=user.controller.js.map