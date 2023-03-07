import { Request, Response } from "express";
import { httpStatusCodes, httpStatusMessages } from "../../../shared/http-status-code";
import { response } from "../../../utils/http-response";
import { editUserAvatar, getUserAvatar } from "../services/user.service";

export const editUserAvatarController = async (req: any, res: Response) => {
    try {
        const data: any = await editUserAvatar();
        return res.status(httpStatusCodes.OK).json(response(httpStatusCodes.OK, httpStatusMessages.OK, data));
    } catch (error: any) {
        return res.status(error?.status || httpStatusCodes.INTERNAL_SERVER)
        .json(response(error?.status || httpStatusCodes.INTERNAL_SERVER, error?.name || httpStatusMessages.INTERNAL_SERVER, null, error));
    }
}

export const getUserAvatarController = async (req: any, res: Response) => {
    try {
        const data: any = await getUserAvatar();
        return res.status(httpStatusCodes.OK).json(response(httpStatusCodes.OK, httpStatusMessages.OK, data));
    } catch (error: any) {
        return res.status(error?.status || httpStatusCodes.INTERNAL_SERVER)
        .json(response(error?.status || httpStatusCodes.INTERNAL_SERVER, error?.name || httpStatusMessages.INTERNAL_SERVER, null, error));
    }
}