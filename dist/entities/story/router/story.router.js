"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../../middlewares/auth"));
const dtoValidator_1 = require("../../../middlewares/dtoValidator");
const story_controller_1 = __importDefault(require("../controllers/story.controller"));
const add_story_dto_1 = require("../dto/add-story.dto");
const uploader_1 = __importDefault(require("../../../middlewares/uploader"));
const get_story_dto_1 = require("../dto/get-story.dto");
const get_all_story_dto_1 = require("../dto/get-all-story.dto");
const storyRouter = express_1.default.Router();
storyRouter.route('/op')
    .post(auth_1.default.userAuthMiddleware, uploader_1.default.storyFileUpload.single('content-file'), (0, dtoValidator_1.dtoValidator)(add_story_dto_1.AddStoryDto), story_controller_1.default.addStory)
    .get(auth_1.default.userAuthMiddleware, (0, dtoValidator_1.dtoValidator)(get_all_story_dto_1.GetAllStoryDto), story_controller_1.default.getAllStory);
storyRouter.route('/op/:storyId')
    .get(auth_1.default.userAuthMiddleware, (0, dtoValidator_1.dtoValidator)(get_story_dto_1.GetStoryDto), story_controller_1.default.getStory);
exports.default = storyRouter;
//# sourceMappingURL=story.router.js.map