import { NextFunction, Request, Response } from "express";
import { httpStatusCodes, httpStatusMessages } from "../shared/http-status-code";
import { BaseError } from "./error-handler";

export const uncaughtException = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);

    const code = err?.status || httpStatusCodes.INTERNAL_SERVER;
    const message = err?.message || httpStatusMessages.INTERNAL_SERVER;

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