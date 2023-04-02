import { Request, Response } from "express";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { globalException, GlobalExceptionType } from "../../../utils/global-exception";
import { response } from "../../../utils/http-response";
import favoriteService from "../services/favorite.service";

const addFavorite = async (req: Request | any, res: Response) => {
    try {
        const data: any = await favoriteService.addFavorite(req.body);
        return res.status(HttpStatusCodes.CREATED)
        .json(response(HttpStatusCodes.CREATED, HttpStatusMessages.CREATED, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

const getFavorite = async (req: Request | any, res: Response) => {
    try {
        const data: any = await favoriteService.getFavorite(req.params);
        return res.status(HttpStatusCodes.OK)
        .json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

const getAllFavorite = async (req: Request | any, res: Response) => {
    try {
        const data: any = await favoriteService.getAllFavorite(req.query);
        return res.status(HttpStatusCodes.OK)
        .json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export default {
    addFavorite,
    getFavorite,
    getAllFavorite,
}