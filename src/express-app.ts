import express from 'express';
import cors from 'cors';

export default async (app: express.Express) => {
    app.use(express.json());
    app.use(cors());
    // app.use(express.static(__dirname + '/public'))

    // error handling    
}
