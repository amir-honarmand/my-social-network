import { Response } from "express";
import path from "path";
import { BaseError } from "../../../utils/error-handler";

const getStoryContent = async (filename: string, res: Response): Promise<any | BaseError> => {
    const appDir: string = path.join(
        __dirname, '..', '..', '..', '..', 'public', 'uploads', 'story-files', 'image', '/', filename
    );
    return res.sendFile(appDir);
}

export default {
    getStoryContent,
}