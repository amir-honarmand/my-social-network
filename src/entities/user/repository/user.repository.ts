import { UpdateResult } from "typeorm";
import { postgres } from "../../../database/postgres";
import { httpStatusCodes, httpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { UserRegisterDto } from "../dto/user-register.dto";
import { UserSession } from "../models/user-session.model";
import { User } from "../models/user.model";

export const UserRepository = (() => {
    async function removeUserSession(userId: number): Promise<void> {
        await postgres.getRepository(UserSession).delete({ user: userId });
    }

    async function addUserSession(userId: number, accessToken: string, refreshToken: string, accessExpiresAt: Date, refreshExpiresAt: Date): Promise<void> {
        await postgres.getRepository(UserSession).insert({
            user: userId,
            accessToken,
            refreshToken,
            accessExpiresAt: new Date(accessExpiresAt),
            refreshExpiresAt: new Date(refreshExpiresAt)
        });
    }

    /* register user */
    async function registerUser(user: UserRegisterDto): Promise<void> {
        try {
            await postgres.getRepository(User).insert({
                first_name: user.first_name,
                last_name: user.last_name,
                user_name: user.user_name,
                password: user.password,
                salt: user.salt,
                mobile: user.mobile,
                email: user.email,
                timezone: user.timezone,
                favorites_id: user.favorites_id
            });
        } catch (error: any) {
            if(error?.driverError?.code === '23505'){
                throw new BaseError(httpStatusMessages.CONFLICT, httpStatusCodes.CONFLICT, `user already exists!`);
            };
        }
    }

    async function findByEmail(userEmail: string): Promise<User | null>{
        const findUser: User = await postgres.getRepository(User).findOneBy({email: userEmail});
        if(!findUser){
            throw new BaseError(httpStatusMessages.NOT_FOUND, httpStatusCodes.NOT_FOUND, `Email or password incorrect!!`);
        };

        return findUser;
    }
    
    return {
        removeUserSession,
        addUserSession,
        registerUser,
        findByEmail
    };
})();