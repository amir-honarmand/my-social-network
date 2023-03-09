import { Request, Response } from "express";
import { globalException, GlobalExceptionType } from "../../../utils/global-exception";
import { response } from "../../../utils/http-response";
import publicService from "../services/public.service";

const getStoryContent = async (req: Request | any, res: Response) => {
    try {
        return await publicService.getStoryContent(req.params.filename, res);
    } catch (error: any) {
        const errorRes: GlobalExceptionType = globalException(error);
        return res.status(errorRes.status).json(response(errorRes.status, errorRes.message, null, errorRes));
    }
}

export default {
    getStoryContent,
}