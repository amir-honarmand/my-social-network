"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_code_1 = require("../../../shared/http-status-code");
const global_exception_1 = require("../../../utils/global-exception");
const http_response_1 = require("../../../utils/http-response");
const story_service_1 = __importDefault(require("../services/story.service"));
const addStory = async (req, res) => {
    try {
        const data = await story_service_1.default.addStory(req.body, req.file, req.userEntity.id);
        return res.status(http_status_code_1.HttpStatusCodes.CREATED)
            .json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.CREATED, http_status_code_1.HttpStatusMessages.CREATED, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
const getStory = async (req, res) => {
    try {
        const data = await story_service_1.default.getStory(req.params);
        return res.status(http_status_code_1.HttpStatusCodes.OK)
            .json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
const getAllStory = async (req, res) => {
    try {
        const data = await story_service_1.default.getAllStory(req.query);
        return res.status(http_status_code_1.HttpStatusCodes.OK)
            .json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.OK, http_status_code_1.HttpStatusMessages.OK, data));
    }
    catch (error) {
        const errorRes = (0, global_exception_1.globalException)(error);
        return res.status(errorRes.status).json((0, http_response_1.response)(errorRes.status, errorRes.message, null, errorRes));
    }
};
exports.default = {
    addStory,
    getStory,
    getAllStory,
};
//# sourceMappingURL=story.controller.js.map