import express from 'express';
import config from './config';
import expressApp from './express-app';
import databaseConnection from './database/postgres';

const StartServer = async () => {

    const app: express.Express = express();

    await databaseConnection();

    await expressApp(app);

    app.listen(config.PORT, () => {
        console.log(`=========> listening to port: ${config.PORT} <=========`);
    })
    .on('error', (err) => {
        console.error(err);
        process.exit();
    });
};

StartServer();