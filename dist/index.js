"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const express_app_1 = __importDefault(require("./express-app"));
const StartServer = async () => {
    const app = (0, express_1.default)();
    await (0, express_app_1.default)(app);
    app.listen(config_1.default.PORT, () => {
        console.log(`=========> listening to port: ${config_1.default.PORT} <=========`);
    })
        .on('error', (err) => {
        console.error(err);
        process.exit();
    });
};
StartServer();
//# sourceMappingURL=index.js.map