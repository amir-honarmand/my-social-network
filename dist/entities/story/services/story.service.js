"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_file_uploaded_url_1 = require("../../../utils/create-file-uploaded-url");
const addStory = async (addStoryDto, file) => {
    const content_url = (0, create_file_uploaded_url_1.createFileUploadedUrl)(file);
    return true;
};
exports.default = {
    addStory,
};
//# sourceMappingURL=story.service.js.map