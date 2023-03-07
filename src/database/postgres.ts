import { DataSource } from "typeorm";
import models from './all-models';
import config from "../config";

export const postgres = new DataSource({
    type: "postgres",
    port: 5432,
    host: config.DATABASE.HOST,
    username: config.DATABASE.USERNAME,
    password: config.DATABASE.PASS,
    database: config.DATABASE.NAME,
    synchronize: true,
    logging: true,
    entities: models,
    subscribers: [],
    migrations: [],
    logger: 'debug'
});
