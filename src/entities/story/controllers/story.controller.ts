import { Request, Response } from "express";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { globalException, GlobalExceptionType } from "../../../utils/global-exception";
import { response } from "../../../utils/http-response";
import storyService from "../services/story.service";

const addStory = async (req: Request | any, res: Response) => {
    try {
        const data: any = await storyService.addStory(req.body, req.file, req.userEntity.id);
        return res.status(HttpStatusCodes.CREATED)
        .json(response(HttpStatusCodes.CREATED, HttpStatusMessages.CREATED, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

const getStory = async (req: Request | any, res: Response) => {
    try {
        const data: any = await storyService.getStory(req.params);
        return res.status(HttpStatusCodes.OK)
        .json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

const getAllStory = async (req: Request | any, res: Response) => {
    try {
        const data: any = await storyService.getAllStory(req.query);
        return res.status(HttpStatusCodes.OK)
        .json(response(HttpStatusCodes.OK, HttpStatusMessages.OK, data));
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export default {
    addStory,
    getStory,
    getAllStory,
}