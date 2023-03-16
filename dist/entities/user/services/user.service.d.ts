import { BaseError } from "../../../utils/error-handler";
import { GetUserDto } from "../dto/getUser.dto";
import { User } from "../models/user.model";
export declare const editUserAvatar: () => Promise<boolean | BaseError>;
export declare const getUserAvatar: () => Promise<boolean | BaseError>;
export declare const getUser: (getUserDto: GetUserDto) => Promise<User | BaseError>;
declare const _default: {
    editUserAvatar: () => Promise<boolean | BaseError>;
    getUserAvatar: () => Promise<boolean | BaseError>;
    getUser: (getUserDto: GetUserDto) => Promise<BaseError | User>;
};
export default _default;
