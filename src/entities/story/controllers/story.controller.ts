import { Request, Response } from "express";
import { httpStatusCodes, httpStatusMessages } from "../../../shared/http-status-code";
import { response } from "../../../utils/http-response";
import storyService from "../services/story.service";

const addStory = async (req: Request | any, res: Response) => {
    try {
        const data: any = await storyService.addStory(req.body, req.file);
        return res.status(httpStatusCodes.CREATED).json(response(httpStatusCodes.CREATED, httpStatusMessages.CREATED, data));
    } catch (error: any) {
        return res.status(error?.status || httpStatusCodes.INTERNAL_SERVER)
        .json(response(error?.status || httpStatusCodes.INTERNAL_SERVER, error?.name || httpStatusMessages.INTERNAL_SERVER, null, error));
    }
}

export default {
    addStory,
}