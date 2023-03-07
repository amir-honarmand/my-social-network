// import { UpdateResult } from "typeorm";
// import postgres from "../../../database/postgres";
// import { httpStatusCodes, httpStatusMessages } from "../../../enums/http-status-code";
// import { BaseError } from "../../../utils/error-handler";
// import { UserSession } from "../models/user-session.model";
// import { User } from "../models/user.model";

// export class UserRepository {
//     constructor(){}

//     async findByMobile(userMobile: string): Promise<User | null>{
//         const findUser: User = await dataSource.getRepository(User).findOneBy({mobile: userMobile});
//         if(!findUser){
//             return null;
//         };

//         return findUser;
//     }

//     async removeUserSession(userId: number): Promise<void>{
//         await dataSource.getRepository(UserSession).delete({user: userId});
//     }

//     async addUserSession(userId: number, accessToken: string, refreshToken: string, accessExpiresAt: Date, refreshExpiresAt: Date): Promise<void>{
//         await dataSource.getRepository(UserSession).insert({
//             user: userId,
//             accessToken,
//             refreshToken,
//             accessExpiresAt: new Date(accessExpiresAt),
//             refreshExpiresAt: new Date(refreshExpiresAt)
//         });
//     }

//     async addUser(userMobile: string, referralCode: string): Promise<User>{
//         const addUser = await dataSource.getRepository(User).save(
//             dataSource.getRepository(User).create({mobile: userMobile, referralCode})
//         );
//         if(!addUser){
//             throw new BaseError(httpStatusMessages.UNPROCESSABLE_ENTITY, httpStatusCodes.UNPROCESSABLE_ENTITY, 'User not created!');
//         };

//         return addUser;
//     }

//     async registerUser(userId: number, name: string, password: string, email: string, referredCode: string): Promise<void>{
//         const registerUser: UpdateResult = await dataSource.getRepository(User).update(userId, {
//             name, password, email, referredCode
//         });
//         if(!registerUser.affected){
//             throw new BaseError(httpStatusMessages.UNPROCESSABLE_ENTITY, httpStatusCodes.UNPROCESSABLE_ENTITY, 'User not updated!');
//         };
//     }
// }