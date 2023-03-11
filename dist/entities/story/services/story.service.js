"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_code_1 = require("../../../shared/http-status-code");
const create_file_uploaded_url_1 = require("../../../utils/create-file-uploaded-url");
const error_handler_1 = require("../../../utils/error-handler");
const story_details_repository_1 = require("../repository/story-details.repository");
const story_repository_1 = require("../repository/story.repository");
const addStory = async (addStoryDto, file, userId) => {
    if (!file || !Object.keys(file).length) {
        throw new error_handler_1.BaseError(http_status_code_1.HttpStatusMessages.INTERNAL_SERVER, http_status_code_1.HttpStatusCodes.INTERNAL_SERVER, 'File not uploaded!');
    }
    ;
    const content_url = (0, create_file_uploaded_url_1.createFileUploadedUrl)(file);
    const storyDetailsId = await story_details_repository_1.storyDetailsRepository.addStoryDetails();
    addStoryDto.content_url = content_url;
    addStoryDto.user_id = userId;
    addStoryDto.story_details_id = storyDetailsId;
    await story_repository_1.storyRepository.addStory(addStoryDto);
    return true;
};
const getStory = async (getStoryDto) => {
    const story = await story_repository_1.storyRepository.getStory(getStoryDto);
    return story;
};
const getAllStory = async (getAllStoryDto) => {
    const story = await story_repository_1.storyRepository.getAllStory(getAllStoryDto);
    return {
        count: story[1],
        page: getAllStoryDto.page,
        limit: getAllStoryDto.limit,
        rows: story[0],
    };
};
const editStory = async (editStoryDto, userId) => {
    await story_repository_1.storyRepository.editStory(editStoryDto, userId);
    return true;
};
const deleteStory = async (deleteStoryDto, userId) => {
    await story_repository_1.storyRepository.deleteStory(deleteStoryDto, userId);
    await story_details_repository_1.storyDetailsRepository.deleteStoryDetailsByStoryId(deleteStoryDto.storyId);
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