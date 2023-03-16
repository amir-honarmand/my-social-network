import { Request, Response } from "express";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { globalException, GlobalExceptionType } from "../../../utils/global-exception";
import { response } from "../../../utils/http-response";
import userAuthService from "../services/user.auth.service";

export const register = async (req: any, res: Response) => {
    try {
        const data: any = await userAuthService.register(req.body);
        return res.status(HttpStatusCodes.CREATED).json(response(HttpStatusCodes.CREATED, HttpStatusMessages.CREATED, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export const login = async (req: any, res: Response) => {
    try {
        const data: any = await userAuthService.login(req.body);
        return res.status(HttpStatusCodes.OK).json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export default {
    register,
    login
}