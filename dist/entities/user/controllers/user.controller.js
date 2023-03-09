"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAvatarController = exports.editUserAvatarController = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const global_exception_1 = require("../../../utils/global-exception");
const http_response_1 = require("../../../utils/http-response");
const user_service_1 = require("../services/user.service");
const editUserAvatarController = async (req, res) => {
    try {
        const data = await (0, user_service_1.editUserAvatar)();
        return res.status(http_status_code_1.HttpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.editUserAvatarController = editUserAvatarController;
const getUserAvatarController = async (req, res) => {
    try {
        const data = await (0, user_service_1.getUserAvatar)();
        return res.status(http_status_code_1.HttpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.getUserAvatarController = getUserAvatarController;
//# sourceMappingURL=user.controller.js.map