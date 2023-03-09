import config from "../../../config";
import { httpStatusCodes, httpStatusMessages } from "../../../shared/http-status-code";
import { createFileUploadedUrl } from "../../../utils/create-file-uploaded-url";
import { BaseError } from "../../../utils/error-handler";
import { AddStoryDto } from "../dto/add-story.dto";

const addStory = async (addStoryDto: AddStoryDto, file: Express.Multer.File): Promise<boolean | BaseError> => {
    
    const content_url = createFileUploadedUrl(file);
    
    return true;
}

export default {
    addStory,
}