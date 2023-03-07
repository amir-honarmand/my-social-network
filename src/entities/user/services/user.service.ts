import { customAlphabet } from "nanoid/async";
import redis from "../../..//database/redis-config";
import { httpStatusCodes, httpStatusMessages } from "../../../shared/http-status-code";
import { Token } from "../../../utils/jwt";
import { BaseError } from "../../../utils/error-handler";

/* handle login */
// const login = async (): Promise<{} | BaseError> => {

// }

export const register = async (body: object): Promise<boolean | BaseError> => {
    
    
    return true;
}