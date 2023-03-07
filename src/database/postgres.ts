import { DataSource } from "typeorm";
import models from './all-models';
import config from "../config";

export default (): Promise<void> => {
    return new DataSource({
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

    }).initialize()
        .then(() => {
            console.log('========> DATABASE CONNECTION SUCCESSFUL <========')
        })
        .catch((error) => {
            console.error(error);
            console.error('DATABASE CONNECTION ERROR!!!');
            return process.exit();
        });
}