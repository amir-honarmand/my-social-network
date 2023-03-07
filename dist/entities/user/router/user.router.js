"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_auth_controller_1 = require("../controllers/user.auth.controller");
const auth_1 = __importDefault(require("../../../middlewares/auth"));
const user_register_dto_1 = require("../dto/user-register.dto");
const dtoValidator_1 = require("../../../middlewares/dtoValidator");
const user_login_dto_1 = require("../dto/user-login.dto");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
userRouter.route('/auth/register')
    .post((0, dtoValidator_1.dtoValidator)(user_register_dto_1.UserRegisterDto), user_auth_controller_1.registerController);
userRouter.route('/auth/login')
    .post((0, dtoValidator_1.dtoValidator)(user_login_dto_1.UserLoginDto), user_auth_controller_1.loginController);
userRouter.route('/avatar')
    .put(user_controller_1.editUserAvatarController)
    .get(auth_1.default.userAuthMiddleware, user_controller_1.getUserAvatarController);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map