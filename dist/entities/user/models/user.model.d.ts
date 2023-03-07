import { userStatus } from "../enums/user-status.enum";
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    user_name: string;
    password: string;
    salt: string;
    mobile: string;
    email: string;
    status: userStatus;
    avatar: object;
    timezone: string;
    favorites_id: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
