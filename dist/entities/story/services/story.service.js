"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_code_1 = require("../../../shared/http-status-code");
const create_file_uploaded_url_1 = require("../../../utils/create-file-uploaded-url");
const error_handler_1 = require("../../../utils/error-handler");
const story_details_repository_1 = require("../repository/story-details.repository");
const story_repository_1 = require("../repository/story.repository");
const addStory = async (addStoryDto, file, userId) => {
    let content_url;
    if (!file || !Object.keys(file).length) {
        if (!addStoryDto.caption) {
            throw new error_handler_1.BaseError(http_status_code_1.HttpStatusMessages.BAD_REQUEST, http_status_code_1.HttpStatusCodes.BAD_REQUEST, 'Content and caption are empty!');
        }
    }
    else {
        content_url = (0, create_file_uploaded_url_1.createFileUploadedUrl)(file);
    }
    ;
    const storyDetailsId = await story_details_repository_1.storyDetailsRepository.addStoryDetails();
    addStoryDto.content_url = content_url;
    addStoryDto.user_id = userId;
    addStoryDto.story_details_id = storyDetailsId;
    await story_repository_1.storyRepository.addStory(addStoryDto);
    return true;
};
const getStory = async (getStoryDto) => {
    const story = await story_repository_1.storyRepository.getStory(getStoryDto);
    if (story.hide_statistics) {
        story.story_details_id = null;
    }
    ;
    if (story.turn_off_comments) {
    }
    ;
    return story;
};
const getAllStory = async (getAllStoryDto) => {
    const story = await story_repository_1.storyRepository.getAllStory(getAllStoryDto);
    let stories = story[0];
    let storyCount = story[1];
    for (let story in stories) {
        if (stories[story].hide_statistics) {
            stories[story].story_details_id = null;
        }
        ;
        if (stories[story].turn_off_comments) {
        }
        ;
    }
    ;
    return {
        count: storyCount,
        page: getAllStoryDto.page,
        limit: getAllStoryDto.limit,
        rows: stories,
    };
};
const editStory = async (editStoryDto, userId) => {
    await story_repository_1.storyRepository.editStory(editStoryDto, userId);
    return true;
};
const deleteStory = async (deleteStoryDto, userId) => {
    await story_repository_1.storyRepository.deleteStoryTransaction(deleteStoryDto, userId);
    return true;
};
exports.default = {
    addStory,
    getStory,
    getAllStory,
    editStory,
    deleteStory,
};
//# sourceMappingURL=story.service.js.map