"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseErrorCodes = exports.HttpStatusMessages = exports.HttpStatusCodes = void 0;
var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["OK"] = 200] = "OK";
    HttpStatusCodes[HttpStatusCodes["CREATED"] = 201] = "CREATED";
    HttpStatusCodes[HttpStatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCodes[HttpStatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCodes[HttpStatusCodes["INTERNAL_SERVER"] = 500] = "INTERNAL_SERVER";
    HttpStatusCodes[HttpStatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCodes[HttpStatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCodes[HttpStatusCodes["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCodes[HttpStatusCodes["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatusCodes[HttpStatusCodes["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
})(HttpStatusCodes = exports.HttpStatusCodes || (exports.HttpStatusCodes = {}));
var HttpStatusMessages;
(function (HttpStatusMessages) {
    HttpStatusMessages["OK"] = "OK";
    HttpStatusMessages["CREATED"] = "CREATED";
    HttpStatusMessages["BAD_REQUEST"] = "BAD_REQUEST";
    HttpStatusMessages["NOT_FOUND"] = "NOT_FOUND";
    HttpStatusMessages["INTERNAL_SERVER"] = "INTERNAL_SERVER_ERROR";
    HttpStatusMessages["UNAUTHORIZED"] = "UNAUTHORIZED";
    HttpStatusMessages["FORBIDDEN"] = "FORBIDDEN";
    HttpStatusMessages["CONFLICT"] = "CONFLICT";
    HttpStatusMessages["UNPROCESSABLE_ENTITY"] = "UNPROCESSABLE_ENTITY";
    HttpStatusMessages["SERVICE_UNAVAILABLE"] = "SERVICE_UNAVAILABLE";
    HttpStatusMessages["UPDATE_FAILED"] = "UPDATE_FAILED";
    HttpStatusMessages["DELETE_FAILED"] = "DELETE_FAILED";
})(HttpStatusMessages = exports.HttpStatusMessages || (exports.HttpStatusMessages = {}));
var DatabaseErrorCodes;
(function (DatabaseErrorCodes) {
    DatabaseErrorCodes["not_null_violation"] = "23502";
    DatabaseErrorCodes["unique_violation"] = "23505";
    DatabaseErrorCodes["invalid_input_value_for_enum"] = "22P02";
})(DatabaseErrorCodes = exports.DatabaseErrorCodes || (exports.DatabaseErrorCodes = {}));
//# sourceMappingURL=http-status-code.js.map