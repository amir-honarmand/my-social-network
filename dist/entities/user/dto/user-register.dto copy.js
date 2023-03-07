"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.UserRegisterDto = {
    body: {
        first_name: joi_1.default.string()
            .regex(/^(?=.{2,32}$)(?![ ])(?!.[ ]{2})[a-zA-Z0-9_.-u0600-u06FF ]+(?![ ])$/)
            .required(),
        last_name: joi_1.default.string()
            .regex(/^(?=.{2,32}$)(?![ ])(?!.[ ]{2})[a-zA-Z0-9_.-u0600-u06FF ]+(?![ ])$/)
            .required(),
        user_name: joi_1.default.string().required().max(30),
        email: joi_1.default.string().email().lowercase().max(200).required(),
        password: joi_1.default.string().regex(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/).required(),
        mobile: joi_1.default.string().max(20),
        favorites_id: joi_1.default.array().required(),
    },
};
//# sourceMappingURL=user-register.dto%20copy.js.map