"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotEnv = __importStar(require("dotenv"));
if (process.env.NODE_ENV !== "production") {
    const configFile = `./.env`;
    dotEnv.config({ path: configFile });
}
else {
    const configFile = `./.env.prod`;
    dotEnv.config({ path: configFile });
}
exports.default = {
    PORT: process.env.PORT,
    DATABASE: {
        HOST: process.env.DATABASE_HOST,
        USERNAME: process.env.DATABASE_USERNAME,
        PASS: process.env.DATABASE_PASSWORD,
        NAME: process.env.DATABASE_NAME,
        REDIS: {
            HOST: process.env.DATABASE_REDIS_HOST
        }
    },
    AUTHENTICATION: {
        USER_SECRET: process.env.USER_SECRET,
        PUBLIC_SECRET: process.env.PUBLIC_SECRET,
        USER_REFRESH_EXPIRE: process.env.USER_REFRESH_EXPIRE,
        USER_ACCESS_EXPIRE: process.env.USER_ACCESS_EXPIRE,
    }
};
//# sourceMappingURL=index.js.map