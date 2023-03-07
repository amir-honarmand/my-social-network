"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const all_models_1 = __importDefault(require("./all-models"));
const config_1 = __importDefault(require("../config"));
exports.default = () => {
    return new typeorm_1.DataSource({
        type: "postgres",
        port: 5432,
        host: config_1.default.DATABASE.HOST,
        username: config_1.default.DATABASE.USERNAME,
        password: config_1.default.DATABASE.PASS,
        database: config_1.default.DATABASE.NAME,
        synchronize: true,
        logging: true,
        entities: all_models_1.default,
        subscribers: [],
        migrations: [],
        logger: 'debug'
    }).initialize()
        .then(() => {
        console.log('========> DATABASE CONNECTION SUCCESSFUL <========');
    })
        .catch((error) => {
        console.error(error);
        console.error('DATABASE CONNECTION ERROR!!!');
        return process.exit();
    });
};
//# sourceMappingURL=postgres.js.map