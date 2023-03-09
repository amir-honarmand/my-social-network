"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const http_status_code_1 = require("../../../shared/http-status-code");
const jwt_1 = require("../../../utils/jwt");
const error_handler_1 = require("../../../utils/error-handler");
const user_repository_1 = require("../repository/user.repository");
const password_1 = require("../../../utils/password");
const roles_enum_1 = require("../../../shared/roles.enum");
const register = async (body) => {
    const password = await (0, password_1.generatePass)(body.password);
    const userRegisterDetails = {
        ...body,
        salt: password.salt,
        password: password.hash
    };
    await user_repository_1.UserRepository.registerUser(userRegisterDetails);
    return true;
};
exports.register = register;
const login = async (userDto) => {
    const user = await user_repository_1.UserRepository.findByEmail(userDto.email);
    const checkPassword = await (0, password_1.validatePass)(userDto.password, user.salt, user.password);
    if (!checkPassword)
        throw new error_handler_1.BaseError(http_status_code_1.HttpStatusMessages.NOT_FOUND, http_status_code_1.HttpStatusCodes.NOT_FOUND, `Email or password incorrect!`);
    const token = new jwt_1.Token((user.id), roles_enum_1.role.USER);
    const refreshToken = token.generateRefresh();
    const accessToken = token.generateAccess();
    await user_repository_1.UserRepository.removeUserSession(user.id);
    await user_repository_1.UserRepository.addUserSession(user.id, accessToken, refreshToken, token.accessExpiresAt, token.refreshExpiresAt);
    return {
        accessToken: {
            token: accessToken,
            expiresAt: token.accessExpiresAt,
        },
        refreshToken: {
            token: refreshToken,
            expiresAt: token.refreshExpiresAt,
        },
    };
};
exports.login = login;
//# sourceMappingURL=user.auth.service.js.map