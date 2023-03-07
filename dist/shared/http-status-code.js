"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpStatusMessages = exports.httpStatusCodes = void 0;
var httpStatusCodes;
(function (httpStatusCodes) {
    httpStatusCodes[httpStatusCodes["OK"] = 200] = "OK";
    httpStatusCodes[httpStatusCodes["CREATED"] = 201] = "CREATED";
    httpStatusCodes[httpStatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    httpStatusCodes[httpStatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    httpStatusCodes[httpStatusCodes["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
    httpStatusCodes[httpStatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    httpStatusCodes[httpStatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    httpStatusCodes[httpStatusCodes["CONFLICT"] = 409] = "CONFLICT";
    httpStatusCodes[httpStatusCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    httpStatusCodes[httpStatusCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
})(httpStatusCodes = exports.httpStatusCodes || (exports.httpStatusCodes = {}));
var httpStatusMessages;
(function (httpStatusMessages) {
    httpStatusMessages["OK"] = "OK";
    httpStatusMessages["CREATED"] = "CREATED";
    httpStatusMessages["BAD_REQUEST"] = "BAD_REQUEST";
    httpStatusMessages["NOT_FOUND"] = "NOT_FOUND";
    httpStatusMessages["INTERNAL_SERVER"] = "INTERNAL_SERVER_ERROR";
    httpStatusMessages["UNAUTHORIZED"] = "UNAUTHORIZED";
    httpStatusMessages["FORBIDDEN"] = "FORBIDDEN";
    httpStatusMessages["CONFLICT"] = "CONFLICT";
    httpStatusMessages["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
    httpStatusMessages["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
})(httpStatusMessages = exports.httpStatusMessages || (exports.httpStatusMessages = {}));
//# sourceMappingURL=http-status-code.js.map