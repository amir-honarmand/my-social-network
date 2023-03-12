"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStoryDto = void 0;
const joi_1 = __importDefault(require("joi"));
exports.AddStoryDto = {
    body: {
        caption: joi_1.default.string().max(800),
        favorites_id: joi_1.default.array().items(joi_1.default.number().required()).required(),
        tags_id: joi_1.default.array().items(joi_1.default.number().required()),
        hide_statistics: joi_1.default.boolean().default(false),
        turn_off_comments: joi_1.default.boolean().default(false),
    },
};
//# sourceMappingURL=add-story.dto.js.map