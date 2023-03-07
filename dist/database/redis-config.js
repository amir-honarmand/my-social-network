"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const config_1 = __importDefault(require("../config"));
const redis = new ioredis_1.default({
    host: config_1.default.DATABASE.REDIS.HOST,
});
redis.on("error", (e) => {
    console.log("!!! REDIS Error: Can not connect !!! " + e);
});
redis.on("connect", () => {
    console.log("*** REDIS Info: Connected. ***");
});
exports.default = redis;
//# sourceMappingURL=redis-config.js.map