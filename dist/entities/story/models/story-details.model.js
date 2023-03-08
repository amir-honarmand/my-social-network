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
exports.StoryDetails = void 0;
const typeorm_1 = require("typeorm");
let StoryDetails = class StoryDetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StoryDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 200, default: '0' }),
    __metadata("design:type", String)
], StoryDetails.prototype, "view_number", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 200, default: '0' }),
    __metadata("design:type", String)
], StoryDetails.prototype, "share_number", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StoryDetails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StoryDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], StoryDetails.prototype, "deletedAt", void 0);
StoryDetails = __decorate([
    (0, typeorm_1.Entity)()
], StoryDetails);
exports.StoryDetails = StoryDetails;
//# sourceMappingURL=story-details.model.js.map