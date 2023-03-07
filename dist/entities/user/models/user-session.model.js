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
exports.UserSession = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model");
let UserSession = class UserSession {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.User),
    __metadata("design:type", Object)
], UserSession.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 200, nullable: true }),
    __metadata("design:type", String)
], UserSession.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 500 }),
    __metadata("design:type", String)
], UserSession.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 500 }),
    __metadata("design:type", String)
], UserSession.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], UserSession.prototype, "accessExpiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], UserSession.prototype, "refreshExpiresAt", void 0);
UserSession = __decorate([
    (0, typeorm_1.Entity)()
], UserSession);
exports.UserSession = UserSession;
//# sourceMappingURL=user-session.model.js.map