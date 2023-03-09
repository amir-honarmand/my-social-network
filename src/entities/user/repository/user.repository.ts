import { UpdateResult } from "typeorm";
import { postgres } from "../../../database/postgres";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { UserRegisterDto } from "../dto/user-register.dto";
import { UserSession } from "../models/user-session.model";
import { User } from "../models/user.model";

export const UserRepository = (() => {
    async function removeUserSession(userId: number): Promise<void> {
        await postgres.getRepository(UserSession).delete({ user_id: userId });
    }

    async function addUserSession(userId: number, accessToken: string, refreshToken: string, accessExpiresAt: Date, refreshExpiresAt: Date): Promise<void> {
        await postgres.getRepository(UserSession).insert({
            user_id: userId,
            accessToken,
            refreshToken,
            accessExpiresAt: new Date(accessExpiresAt),
            refreshExpiresAt: new Date(refreshExpiresAt)
        });
    }

    /* register user */
    async function registerUser(user: UserRegisterDto): Promise<void> {
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
    }

    async function findByEmail(userEmail: string): Promise<User | null> {
        const findUser: User = await postgres.getRepository(User).findOneBy({ email: userEmail });
        if (!findUser) {
            throw new BaseError(HttpStatusMessages.NOT_FOUND, HttpStatusCodes.NOT_FOUND, `Email or password incorrect!!`);
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