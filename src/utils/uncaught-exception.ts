import { NextFunction, Request, Response } from "express";
import { HttpStatusCodes, HttpStatusMessages } from "../shared/http-status-code";
import { BaseError } from "./error-handler";

export const uncaughtException = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    const code = err?.status || HttpStatusCodes.INTERNAL_SERVER;
    const message = err?.message || HttpStatusMessages.INTERNAL_SERVER;

    res.status(code).send(message);
}

process.on('uncaughtException', error => {
    console.error(error);

    if (error instanceof BaseError) {
        return error;
    };
    process.exit(1)
})

// if the Promise is rejected this will catch it
process.on('unhandledRejection', error => {
    throw error;
})