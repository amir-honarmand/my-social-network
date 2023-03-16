"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUserAvatar = exports.editUserAvatar = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const global_exception_1 = require("../../../utils/global-exception");
const http_response_1 = require("../../../utils/http-response");
const user_service_1 = __importDefault(require("../services/user.service"));
const editUserAvatar = async (req, res) => {
    try {
        const data = await user_service_1.default.editUserAvatar();
        return res.status(http_status_code_1.HttpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.editUserAvatar = editUserAvatar;
const getUserAvatar = async (req, res) => {
    try {
        const data = await user_service_1.default.getUserAvatar();
        return res.status(http_status_code_1.HttpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.getUserAvatar = getUserAvatar;
const getUser = async (req, res) => {
    try {
        const data = await user_service_1.default.getUser(req.params);
        return res.status(http_status_code_1.HttpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.getUser = getUser;
exports.default = {
    editUserAvatar: exports.editUserAvatar,
    getUserAvatar: exports.getUserAvatar,
    getUser: exports.getUser,
};
//# sourceMappingURL=user.controller.js.map