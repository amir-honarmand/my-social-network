"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.UserLoginDto = {
    body: {
        email: joi_1.default.string().email().lowercase().max(200).required(),
        password: joi_1.default.string().required().max(200),
    },
};
//# sourceMappingURL=user-login.dto.js.map