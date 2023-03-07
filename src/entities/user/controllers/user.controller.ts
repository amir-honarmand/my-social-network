import { Request, Response } from "express";
import { httpStatusCodes, httpStatusMessages } from "../../../shared/http-status-code";
import { response } from "../../../utils/http-response";
import { login, register } from "../services/user.service";

export const registerController = async (req: any, res: Response) => {
    try {
        const data: any = await register(req.body);
        return res.status(httpStatusCodes.CREATED).json(response(httpStatusCodes.CREATED, httpStatusMessages.CREATED, data));
    } catch (error: any) {
        return res.status(error?.status || httpStatusCodes.INTERNAL_SERVER)
        .json(response(error?.status || httpStatusCodes.INTERNAL_SERVER, error?.name || httpStatusMessages.INTERNAL_SERVER, null, error));
    }

}

export const loginController = async (req: any, res: Response) => {
    try {
        const data: any = await login(req.body);
        return res.status(httpStatusCodes.OK).json(response(httpStatusCodes.OK, httpStatusMessages.OK, data));
    } catch (error: any) {
        return res.status(error?.status || httpStatusCodes.INTERNAL_SERVER)
        .json(response(error?.status || httpStatusCodes.INTERNAL_SERVER, error?.name || httpStatusMessages.INTERNAL_SERVER, null, error));
    }

}