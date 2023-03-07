"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_status_enum_1 = require("../entities/user/enums/user-status.enum");
const typeorm_1 = require("typeorm");
const postgres_1 = require("../database/postgres");
const user_session_model_1 = require("../entities/user/models/user-session.model");
const user_model_1 = require("../entities/user/models/user.model");
const http_status_code_1 = require("../shared/http-status-code");
const roles_enum_1 = require("../shared/roles.enum");
const error_handler_1 = require("../utils/error-handler");
const http_response_1 = require("../utils/http-response");
const jwt_1 = require("../utils/jwt");
const userAuth = (userType, tokenType) => async (req, res, next) => {
    try {
        let authorization = req?.headers?.authorization ?? null;
        if (!authorization)
            throw new error_handler_1.BaseError(http_status_code_1.httpStatusMessages.UNAUTHORIZED, http_status_code_1.httpStatusCodes.UNAUTHORIZED, http_status_code_1.httpStatusMessages.UNAUTHORIZED, true);
        const tokenArray = authorization?.split(" ");
        if (!tokenArray || tokenArray[0] != "Bearer" || !tokenArray[1])
            throw new error_handler_1.BaseError(http_status_code_1.httpStatusMessages.UNAUTHORIZED, http_status_code_1.httpStatusCodes.UNAUTHORIZED, http_status_code_1.httpStatusMessages.UNAUTHORIZED, true);
        let token = tokenArray[1];
        let payload = null;
        try {
            payload = (0, jwt_1.jwtVerify)(token, null, userType);
            if (!payload?.id || userType !== payload.userType || tokenType !== payload.tokenType) {
                throw new error_handler_1.BaseError(http_status_code_1.httpStatusMessages.UNAUTHORIZED, http_status_code_1.httpStatusCodes.UNAUTHORIZED, http_status_code_1.httpStatusMessages.UNAUTHORIZED, true);
            }
            ;
        }
        catch (error) {
            return res.status(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER)
                .json((0, http_response_1.response)(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER, error?.name || http_status_code_1.httpStatusMessages.INTERNAL_SERVER, null, error));
        }
        ;
        let user = null;
        let sessionModel;
        let session;
        if (userType == roles_enum_1.role.USER) {
            user = await postgres_1.postgres.getRepository(user_model_1.User).findOneBy({ id: payload.id });
            if (user.status === user_status_enum_1.userStatus.BLOCK) {
                throw new error_handler_1.BaseError(http_status_code_1.httpStatusMessages.FORBIDDEN, http_status_code_1.httpStatusCodes.FORBIDDEN, 'You are blocked!', true);
            }
            ;
            if (user.status === user_status_enum_1.userStatus.INACTIVE) {
                throw new error_handler_1.BaseError(http_status_code_1.httpStatusMessages.FORBIDDEN, http_status_code_1.httpStatusCodes.FORBIDDEN, 'You are inactive!', true);
            }
            ;
            sessionModel = postgres_1.postgres.getRepository(user_session_model_1.UserSession);
        }
        if (!user) {
            throw new error_handler_1.BaseError(http_status_code_1.httpStatusMessages.UNAUTHORIZED, http_status_code_1.httpStatusCodes.UNAUTHORIZED, 'User not found, unauthorized!', true);
        }
        ;
        if (tokenType == "refresh") {
            session = await sessionModel?.findOneBy({
                refreshToken: token, refreshExpiresAt: (0, typeorm_1.MoreThan)(new Date())
            });
        }
        else {
            session = await sessionModel?.findOneBy({
                accessToken: token, accessExpiresAt: (0, typeorm_1.MoreThan)(new Date())
            });
        }
        if (!session) {
            throw new error_handler_1.BaseError(http_status_code_1.httpStatusMessages.UNAUTHORIZED, http_status_code_1.httpStatusCodes.UNAUTHORIZED, http_status_code_1.httpStatusMessages.UNAUTHORIZED, true);
        }
        ;
        req.sessionEntity = session;
        req.userEntity = user;
        next();
    }
    catch (error) {
        return res.status(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER)
            .json((0, http_response_1.response)(error?.status || http_status_code_1.httpStatusCodes.INTERNAL_SERVER, error?.name || http_status_code_1.httpStatusMessages.INTERNAL_SERVER, null, error));
    }
};
exports.default = {
    userAuthMiddleware: userAuth(roles_enum_1.role.USER, "access"),
    userAuthRefreshMiddleware: userAuth(roles_enum_1.role.USER, "refresh"),
};
//# sourceMappingURL=auth.js.map