"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStoryController = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const http_response_1 = require("../../../utils/http-response");
const addStoryController = async (req, res) => {
    try {
        const data = await ();
        return res.status(http_status_code_1.httpStatusCodes.CREATED).json((0, http_response_1.response)(http_status_code_1.httpStatusCodes.CREATED, http_status_code_1.httpStatusMessages.CREATED, data));
    }
    catch (error) {
        return res.status(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER)
            .json((0, http_response_1.response)(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER, error?.name || http_status_code_1.httpStatusMessages.INTERNAL_SERVER, null, error));
    }
};
exports.addStoryController = addStoryController;
//# sourceMappingURL=user.controller.js.map