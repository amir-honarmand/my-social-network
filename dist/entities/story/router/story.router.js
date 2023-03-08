"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dtoValidator_1 = require("../../../middlewares/dtoValidator");
const story_controller_1 = __importDefault(require("../controllers/story.controller"));
const add_story_dto_1 = require("../dto/add-story.dto");
const uploader_1 = __importDefault(require("../../../middlewares/uploader"));
const storyRouter = express_1.default.Router();
storyRouter.route('/op')
    .post((0, dtoValidator_1.dtoValidator)(add_story_dto_1.AddStoryDto), uploader_1.default.storyFileUpload.single('content-file'), story_controller_1.default.addStory);
exports.default = storyRouter;
//# sourceMappingURL=story.router.js.map