import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { UserRepository } from "../repository/user.repository";

export const editUserAvatar = async (): Promise<boolean | BaseError> => {
    return true;
}

export const getUserAvatar = async (): Promise<boolean | BaseError> => {
    return true;
}
