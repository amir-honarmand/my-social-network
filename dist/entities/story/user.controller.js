"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAvatarController = exports.editUserAvatarController = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const http_response_1 = require("../../../utils/http-response");
const user_service_1 = require("../services/user.service");
const editUserAvatarController = async (req, res) => {
    try {
        const data = await (0, user_service_1.editUserAvatar)();
        return res.status(http_status_code_1.httpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.httpStatusCodes.OK, http_status_code_1.httpStatusMessages.OK, data));
    }
    catch (error) {
        return res.status(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER)
            .json((0, http_response_1.response)(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER, error?.name || http_status_code_1.httpStatusMessages.INTERNAL_SERVER, null, error));
    }
};
exports.editUserAvatarController = editUserAvatarController;
const getUserAvatarController = async (req, res) => {
    try {
        const data = await (0, user_service_1.getUserAvatar)();
        return res.status(http_status_code_1.httpStatusCodes.OK).json((0, http_response_1.response)(http_status_code_1.httpStatusCodes.OK, http_status_code_1.httpStatusMessages.OK, data));
    }
    catch (error) {
        return res.status(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER)
            .json((0, http_response_1.response)(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER, error?.name || http_status_code_1.httpStatusMessages.INTERNAL_SERVER, null, error));
    }
};
exports.getUserAvatarController = getUserAvatarController;
//# sourceMappingURL=user.controller.js.map