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
exports.Favorite = void 0;
const typeorm_1 = require("typeorm");
const favorite_status_enum_1 = require("../enums/favorite-status.enum");
let Favorite = class Favorite {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Favorite.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: false, length: 30 }),
    __metadata("design:type", String)
], Favorite.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { enum: favorite_status_enum_1.FavoriteStatus, default: favorite_status_enum_1.FavoriteStatus.ACTIVE }),
    __metadata("design:type", String)
], Favorite.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Favorite.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Favorite.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ select: false }),
    __metadata("design:type", Date)
], Favorite.prototype, "deletedAt", void 0);
Favorite = __decorate([
    (0, typeorm_1.Entity)()
], Favorite);
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.model.js.map