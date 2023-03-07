import express from 'express';
import cors from 'cors';
import router from './router';

export default async (app: express.Express) => {
    app.use(express.json());
    app.use(cors());
    app.use('/v1', router);

    app.all('*', (req, res) => {
        res.status(404).json({
            status: 'fail',
            message: `Can't find ${req.originalUrl} on this server!`
        });
    });
}
