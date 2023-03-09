"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const global_exception_1 = require("../../../utils/global-exception");
const http_response_1 = require("../../../utils/http-response");
const user_auth_service_1 = require("../services/user.auth.service");
const registerController = async (req, res) => {
    try {
        const data = await (0, user_auth_service_1.register)(req.body);
        return res.status(http_status_code_1.HttpStatusCodes.CREATED).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.CREATED, http_status_code_1.HttpStatusMessages.CREATED, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.registerController = registerController;
const loginController = async (req, res) => {
    try {
        const data = await (0, user_auth_service_1.login)(req.body);
        return res.status(http_status_code_1.HttpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.loginController = loginController;
//# sourceMappingURL=user.auth.controller.js.map