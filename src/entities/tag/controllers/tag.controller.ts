import { Request, Response } from "express";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { globalException, GlobalExceptionType } from "../../../utils/global-exception";
import { response } from "../../../utils/http-response";
import tagService from "../services/tag.service";

const addTag = async (req: Request | any, res: Response) => {
    try {
        const data: any = await tagService.addTag(req.body);
        return res.status(HttpStatusCodes.CREATED)
        .json(response(HttpStatusCodes.CREATED, HttpStatusMessages.CREATED, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

const getTag = async (req: Request | any, res: Response) => {
    try {
        const data: any = await tagService.getTag(req.params);
        return res.status(HttpStatusCodes.OK)
        .json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

const getAllTag = async (req: Request | any, res: Response) => {
    try {
        const data: any = await tagService.getAllTag(req.query);
        return res.status(HttpStatusCodes.OK)
        .json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export default {
    addTag,
    getTag,
    getAllTag
}