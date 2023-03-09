"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dtoValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const http_status_code_1 = require("../shared/http-status-code");
const http_response_1 = require("../utils/http-response");
const pick_1 = require("../utils/pick");
const dtoValidator = (schema) => (req, res, next) => {
    const validSchema = (0, pick_1.pick)(schema, ["params", "query", "body"]);
    const object = (0, pick_1.pick)(req, Object.keys(validSchema));
    const { value, error } = joi_1.default.compile(validSchema)
        .prefs({ errors: { label: "key" } })
        .validate(object);
    if (error) {
        let errorMessage = '';
        for (const err of error.details) {
            errorMessage += " [ " + err.path.join(" > ") + err.message.slice(err.message.lastIndexOf('"') + 1) + " ] ";
        }
        return res.status(http_status_code_1.HttpStatusCodes.BAD_REQUEST).json((0, http_response_1.response)(http_status_code_1.HttpStatusCodes.BAD_REQUEST, http_status_code_1.HttpStatusMessages.BAD_REQUEST, null, errorMessage));
    }
    Object.assign(req, value);
    return next();
};
exports.dtoValidator = dtoValidator;
//# sourceMappingURL=dtoValidator.js.map