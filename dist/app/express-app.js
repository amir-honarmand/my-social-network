"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const morgan_1 = __importDefault(require("morgan"));
exports.default = async (app) => {
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)('dev'));
    app.use('/v1', router_1.default);
    app.all('*', (req, res) => {
        res.status(404).json({
            status: 'fail',
            message: `Can't find ${req.originalUrl} on this server!`
        });
    });
};
//# sourceMappingURL=express-app.js.map