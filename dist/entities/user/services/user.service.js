"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUserAvatar = exports.editUserAvatar = void 0;
const user_repository_1 = require("../repository/user.repository");
const editUserAvatar = async () => {
    return true;
};
exports.editUserAvatar = editUserAvatar;
const getUserAvatar = async () => {
    return true;
};
exports.getUserAvatar = getUserAvatar;
const getUser = async (getUserDto) => {
    return await user_repository_1.UserRepository.getUser(getUserDto);
};
exports.getUser = getUser;
exports.default = {
    editUserAvatar: exports.editUserAvatar,
    getUserAvatar: exports.getUserAvatar,
    getUser: exports.getUser,
};
//# sourceMappingURL=user.service.js.map