"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const user_register_dto_1 = require("../dto/user-register.dto");
const dtoValidator_1 = require("../../../middlewares/dtoValidator");
const user_login_dto_1 = require("../dto/user-login.dto");
const userRouter = express_1.default.Router();
userRouter.route('/register')
    .post((0, dtoValidator_1.dtoValidator)(user_register_dto_1.UserRegisterDto), user_controller_1.registerController);
userRouter.route('/login')
    .post((0, dtoValidator_1.dtoValidator)(user_login_dto_1.UserLoginDto), user_controller_1.loginController);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map