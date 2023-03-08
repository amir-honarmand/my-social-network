"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const story_router_1 = __importDefault(require("../entities/story/router/story.router"));
const user_router_1 = __importDefault(require("../entities/user/router/user.router"));
const router = express_1.default.Router();
router.use('/user', user_router_1.default);
router.use('/story', story_router_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map