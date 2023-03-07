import express from 'express';
import config from './config';
import expressApp from './app/express-app';
import {postgres} from './database/postgres';

const StartServer = async () => {

    const app: express.Express = express();
    
    try {
        await postgres.initialize();
        console.log('========> DATABASE CONNECTION SUCCESSFUL <========');
    } catch (error) {
        console.error(error);
        console.error('DATABASE CONNECTION ERROR!!!');
        process.exit(1);
    };

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