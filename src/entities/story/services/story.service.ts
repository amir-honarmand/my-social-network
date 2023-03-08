import { httpStatusCodes, httpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { AddStoryDto } from "../dto/add-story.dto";

const addStory = async (addStoryDto: AddStoryDto): Promise<boolean | BaseError> => {
    return true;
}

export default {
    addStory,
}