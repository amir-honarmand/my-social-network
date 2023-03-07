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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateSignature = exports.GenerateSignature = exports.ValidatePassword = exports.GeneratePassword = exports.GenerateSalt = void 0;
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const GenerateSalt = async () => {
    return await bcrypt.genSalt();
};
exports.GenerateSalt = GenerateSalt;
const GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt);
};
exports.GeneratePassword = GeneratePassword;
const ValidatePassword = async (enteredPassword, savedPassword, salt) => {
    return (await (0, exports.GeneratePassword)(enteredPassword, salt)) === savedPassword;
};
exports.ValidatePassword = ValidatePassword;
const GenerateSignature = (payload) => {
    return jwt.sign(payload, config_1.default.APP_SECRET, { expiresIn: "30d" });
};
exports.GenerateSignature = GenerateSignature;
const ValidateSignature = (req) => {
    const signature = req.get("Authorization");
    if (signature) {
        const payload = jwt.verify(signature.split(" ")[1], config_1.default.APP_SECRET);
        return true;
    }
    ;
    return false;
};
exports.ValidateSignature = ValidateSignature;
//# sourceMappingURL=index.js.map