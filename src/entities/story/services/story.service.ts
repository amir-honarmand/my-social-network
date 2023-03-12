import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { createFileUploadedUrl } from "../../../utils/create-file-uploaded-url";
import { BaseError } from "../../../utils/error-handler";
import { AddStoryDto } from "../dto/add-story.dto";
import { DeleteStoryDto } from "../dto/delete-story.dto";
import { EditStoryDto } from "../dto/edit-story.dto";
import { GetAllStoryDto } from "../dto/get-all-story.dto";
import { GetStoryDto } from "../dto/get-story.dto";
import { Story } from "../models/story.model";
import { storyDetailsRepository } from "../repository/story-details.repository";
import { storyRepository } from "../repository/story.repository";

const addStory = async (addStoryDto: AddStoryDto, file: Express.Multer.File, userId: number): Promise<boolean | BaseError> => {
    let content_url: string;

    if (!file || !Object.keys(file).length) {
        if (!addStoryDto.caption) {
            throw new BaseError(HttpStatusMessages.BAD_REQUEST, HttpStatusCodes.BAD_REQUEST, 'Content and caption are empty!')
        }
    } else {
        content_url = createFileUploadedUrl(file);
    };

    const storyDetailsId = await storyDetailsRepository.addStoryDetails();

    addStoryDto.content_url = content_url;
    addStoryDto.user_id = userId;
    addStoryDto.story_details_id = storyDetailsId;

    await storyRepository.addStory(addStoryDto);

    return true;
}

const getStory = async (getStoryDto: GetStoryDto): Promise<object | BaseError> => {
    const story = await storyRepository.getStory(getStoryDto);
    // get comments

    // hide statistics check
    if (story.hide_statistics) {
        story.story_details_id = null;
    };

    // turn off comments check
    if (story.turn_off_comments) {
        // comments null
    };

    return story;
}

const getAllStory = async (getAllStoryDto: GetAllStoryDto): Promise<object | BaseError> => {
    const story = await storyRepository.getAllStory(getAllStoryDto);

    let stories: Story[] = story[0];
    let storyCount: number = story[1];

    for (let story in stories) {
        // hide statistics check
        if (stories[story].hide_statistics) {
            stories[story].story_details_id = null;
        };

        // turn off comments check
        if (stories[story].turn_off_comments) {
            // comments null
        };
    };

    return {
        count: storyCount,
        page: getAllStoryDto.page,
        limit: getAllStoryDto.limit,
        rows: stories,
    };
}

const editStory = async (editStoryDto: EditStoryDto, userId: number): Promise<boolean | BaseError> => {
    await storyRepository.editStory(editStoryDto, userId);
    return true;
}

const deleteStory = async (deleteStoryDto: DeleteStoryDto, userId: number): Promise<boolean | BaseError> => {
    await storyRepository.deleteStoryTransaction(deleteStoryDto, userId);
    return true;
}

export default {
    addStory,
    getStory,
    getAllStory,
    editStory,
    deleteStory,
}