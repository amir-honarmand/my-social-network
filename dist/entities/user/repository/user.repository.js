"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const postgres_1 = require("../../../database/postgres");
const http_status_code_1 = require("../../../shared/http-status-code");
const error_handler_1 = require("../../../utils/error-handler");
const user_model_1 = require("../models/user.model");
exports.UserRepository = (() => {
    async function getUser(getUserDto) {
        const findUser = await postgres_1.postgres.getRepository(user_model_1.User).findOne({
            where: {
                id: getUserDto.userId,
            },
            select: [
                "id",
                "avatar",
                "createdAt",
                "email",
                "first_name",
                "last_name",
                "favorites_id",
                "user_name",
            ],
        });
        if (!findUser) {
            throw new error_handler_1.BaseError(http_status_code_1.HttpStatusMessages.NOT_FOUND, http_status_code_1.HttpStatusCodes.NOT_FOUND, "");
        }
        return findUser;
    }
    return {
        getUser,
    };
})();
//# sourceMappingURL=user.repository.js.map