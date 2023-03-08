"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Story = void 0;
const typeorm_1 = require("typeorm");
const storyboard_model_1 = require("../../storyboard/models/storyboard.model");
const user_model_1 = require("../../user/models/user.model");
const story_status_enum_1 = require("../enums/story-status.enum");
const story_details_model_1 = require("./story-details.model");
let Story = class Story {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Story.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 800, nullable: true }),
    __metadata("design:type", String)
], Story.prototype, "caption", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 500, nullable: true }),
    __metadata("design:type", String)
], Story.prototype, "content_url", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { enum: story_status_enum_1.StoryStatus, default: story_status_enum_1.StoryStatus.PUBLISHING }),
    __metadata("design:type", String)
], Story.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => storyboard_model_1.Storyboard, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'storyboard_id' }),
    __metadata("design:type", Object)
], Story.prototype, "storyboard_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.User, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", Object)
], Story.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => story_details_model_1.StoryDetails, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'story_details_id' }),
    __metadata("design:type", Object)
], Story.prototype, "story_details_id", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: false }),
    __metadata("design:type", Array)
], Story.prototype, "favorites_id", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", Array)
], Story.prototype, "tags_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Story.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Story.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Story.prototype, "deletedAt", void 0);
Story = __decorate([
    (0, typeorm_1.Entity)()
], Story);
exports.Story = Story;
//# sourceMappingURL=story.model.js.map