import config from "../../../config";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { createFileUploadedUrl } from "../../../utils/create-file-uploaded-url";
import { BaseError } from "../../../utils/error-handler";
import { storyboardRepository } from "../../storyboard/repository/storyboard.repository";
import { AddStoryDto } from "../dto/add-story.dto";
import { GetStoryDto } from "../dto/get-story.dto";
import { storyDetailsRepository } from "../repository/story-details.repository";
import { storyRepository } from "../repository/story.repository";

const addStory = async (addStoryDto: AddStoryDto, file: Express.Multer.File, userId: number): Promise<boolean | BaseError> => {   
    const content_url: string = createFileUploadedUrl(file);
    const currentDayId = await storyboardRepository.findCurrentDay();
    const storyDetailsId = await storyDetailsRepository.addStoryDetails();
    
    addStoryDto.content_url = content_url;
    addStoryDto.user_id = userId;
    addStoryDto.story_details_id = storyDetailsId;
    addStoryDto.storyboard_id = currentDayId;

    await storyRepository.addStory(addStoryDto);
    
    return true;
}

const getStory = async (getStoryDto: GetStoryDto): Promise<object | BaseError> => {   
    const story = await storyRepository.getStory(getStoryDto);
    return story;
}

export default {
    addStory,
    getStory
}