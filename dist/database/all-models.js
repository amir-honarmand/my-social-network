"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const favorite_model_1 = require("../entities/favorite/models/favorite.model");
const comment_model_1 = require("../entities/story/models/comment.model");
const story_details_model_1 = require("../entities/story/models/story-details.model");
const story_model_1 = require("../entities/story/models/story.model");
const storyboard_model_1 = require("../entities/storyboard/models/storyboard.model");
const tag_model_1 = require("../entities/tag/models/tag.model");
const user_session_model_1 = require("../entities/user/models/user-session.model");
const user_model_1 = require("../entities/user/models/user.model");
exports.default = [
    user_model_1.User,
    user_session_model_1.UserSession,
    comment_model_1.Comment,
    story_model_1.Story,
    story_details_model_1.StoryDetails,
    storyboard_model_1.Storyboard,
    tag_model_1.Tag,
    favorite_model_1.Favorite
];
//# sourceMappingURL=all-models.js.map