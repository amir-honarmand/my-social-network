import { Request, Response } from "express";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { globalException, GlobalExceptionType } from "../../../utils/global-exception";
import { response } from "../../../utils/http-response";
import { editUserAvatar, getUserAvatar } from "../services/user.service";

export const editUserAvatarController = async (req: any, res: Response) => {
    try {
        const data: any = await editUserAvatar();
        return res.status(HttpStatusCodes.OK).json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export const getUserAvatarController = async (req: any, res: Response) => {
    try {
        const data: any = await getUserAvatar();
        return res.status(HttpStatusCodes.OK).json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}
