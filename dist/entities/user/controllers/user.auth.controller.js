"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const global_exception_1 = require("../../../utils/global-exception");
const http_response_1 = require("../../../utils/http-response");
const user_auth_service_1 = __importDefault(require("../services/user.auth.service"));
const register = async (req, res) => {
    try {
        const data = await user_auth_service_1.default.register(req.body);
        return res.status(http_status_code_1.HttpStatusCodes.CREATED).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.CREATED, http_status_code_1.HttpStatusMessages.CREATED, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const data = await user_auth_service_1.default.login(req.body);
        return res.status(http_status_code_1.HttpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.login = login;
exports.default = {
    register: exports.register,
    login: exports.login
};
//# sourceMappingURL=user.auth.controller.js.map