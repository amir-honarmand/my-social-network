import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { GetUserDto } from "../dto/getUser.dto";
import { User } from "../models/user.model";
import { UserRepository } from "../repository/user.repository";
import { UserAuthRepository } from "../repository/userAuth.repository";

export const editUserAvatar = async (): Promise<boolean | BaseError> => {
    return true;
}

export const getUserAvatar = async (): Promise<boolean | BaseError> => {
    return true;
}

export const getUser = async (getUserDto: GetUserDto): Promise<User | BaseError> => {
    return await UserRepository.getUser(getUserDto);
}

export default {
    editUserAvatar,
    getUserAvatar,
    getUser,
}