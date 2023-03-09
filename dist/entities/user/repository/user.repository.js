"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const postgres_1 = require("../../../database/postgres");
const http_status_code_1 = require("../../../shared/http-status-code");
const error_handler_1 = require("../../../utils/error-handler");
const user_session_model_1 = require("../models/user-session.model");
const user_model_1 = require("../models/user.model");
exports.UserRepository = (() => {
    async function removeUserSession(userId) {
        await postgres_1.postgres.getRepository(user_session_model_1.UserSession).delete({ user_id: userId });
    }
    async function addUserSession(userId, accessToken, refreshToken, accessExpiresAt, refreshExpiresAt) {
        await postgres_1.postgres.getRepository(user_session_model_1.UserSession).insert({
            user_id: userId,
            accessToken,
            refreshToken,
            accessExpiresAt: new Date(accessExpiresAt),
            refreshExpiresAt: new Date(refreshExpiresAt)
        });
    }
    async function registerUser(user) {
        await postgres_1.postgres.getRepository(user_model_1.User).insert({
            first_name: user.first_name,
            last_name: user.last_name,
            user_name: user.user_name,
            password: user.password,
            salt: user.salt,
            mobile: user.mobile,
            email: user.email,
            timezone: user.timezone,
            favorites_id: user.favorites_id
        });
    }
    async function findByEmail(userEmail) {
        const findUser = await postgres_1.postgres.getRepository(user_model_1.User).findOneBy({ email: userEmail });
        if (!findUser) {
            throw new error_handler_1.BaseError(http_status_code_1.HttpStatusMessages.NOT_FOUND, http_status_code_1.HttpStatusCodes.NOT_FOUND, `Email or password incorrect!!`);
        }
        ;
        return findUser;
    }
    return {
        removeUserSession,
        addUserSession,
        registerUser,
        findByEmail
    };
})();
//# sourceMappingURL=user.repository.js.map