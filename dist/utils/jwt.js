"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.jwtVerify = exports.jwtGenerate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const roles_enum_1 = require("../shared/roles.enum");
const config_1 = __importDefault(require("../config"));
const jwtGenerate = (payload, secret, expiresIn, userType) => {
    try {
        if (userType === roles_enum_1.role.USER) {
            secret = config_1.default.AUTHENTICATION.USER_SECRET;
        }
        else {
            secret = config_1.default.AUTHENTICATION.PUBLIC_SECRET;
        }
        return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: expiresIn });
    }
    catch (e) {
        return null;
    }
};
exports.jwtGenerate = jwtGenerate;
const jwtVerify = (token, secret, userType) => {
    try {
        if (userType == roles_enum_1.role.USER) {
            secret = config_1.default.AUTHENTICATION.USER_SECRET;
        }
        else {
            secret = config_1.default.AUTHENTICATION.PUBLIC_SECRET;
        }
        ;
        const verified = jsonwebtoken_1.default.verify(token, secret, { complete: true });
        return verified?.payload ?? null;
    }
    catch (e) {
        return null;
    }
};
exports.jwtVerify = jwtVerify;
class Token {
    constructor(userId, userType) {
        this.userId = userId;
        this.userType = userType;
        this.date = new Date();
        this.secret = config_1.default.AUTHENTICATION.USER_SECRET;
        this.refreshExpiry = config_1.default.AUTHENTICATION.USER_REFRESH_EXPIRE;
        this.accessExpiry = config_1.default.AUTHENTICATION.USER_ACCESS_EXPIRE;
        this.accessExpiresAt = +this.date + +this.accessExpiry * 1000;
        this.refreshExpiresAt = +this.date + +this.refreshExpiry * 1000;
    }
    generateRefresh() {
        return (0, exports.jwtGenerate)({
            id: this.userId,
            userType: this.userType,
            tokenType: "refresh",
            expiresAt: this.refreshExpiresAt,
        }, this.secret, this.refreshExpiry, this.userType);
    }
    generateAccess() {
        return (0, exports.jwtGenerate)({
            id: this.userId,
            userType: this.userType,
            tokenType: "access",
            expiresAt: this.accessExpiresAt,
        }, this.secret, this.accessExpiry, this.userType);
    }
}
exports.Token = Token;
//# sourceMappingURL=jwt.js.map