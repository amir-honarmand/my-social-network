import { Request, Response } from "express";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { globalException, GlobalExceptionType } from "../../../utils/global-exception";
import { response } from "../../../utils/http-response";
import userService from "../services/user.service";

export const editUserAvatar = async (req: any, res: Response) => {
    try {
        const data: any = await userService.editUserAvatar();
        return res.status(HttpStatusCodes.OK).json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export const getUserAvatar = async (req: any, res: Response) => {
    try {
        const data: any = await userService.getUserAvatar();
        return res.status(HttpStatusCodes.OK).json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export const getUser = async (req: any, res: Response) => {
    try {
        const data: any = await userService.getUser(req.params);
        return res.status(HttpStatusCodes.OK).json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export default {
    editUserAvatar,
    getUserAvatar,
    getUser,
}