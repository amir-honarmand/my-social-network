"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_code_1 = require("../../../shared/http-status-code");
const http_response_1 = require("../../../utils/http-response");
const story_service_1 = __importDefault(require("../services/story.service"));
const addStory = async (req, res) => {
    try {
        const data = await story_service_1.default.addStory(req.body);
        return res.status(http_status_code_1.httpStatusCodes.CREATED).json((0, http_response_1.response)(http_status_code_1.httpStatusCodes.CREATED, http_status_code_1.httpStatusMessages.CREATED, data));
    }
    catch (error) {
        return res.status(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER)
            .json((0, http_response_1.response)(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER, error?.name || http_status_code_1.httpStatusMessages.INTERNAL_SERVER, null, error));
    }
};
exports.default = {
    addStory,
};
//# sourceMappingURL=story.controller.js.map