import { User } from "./user.model";
export declare class UserSession {
    id: number;
    user: User | number;
    ip: string;
    accessToken: string;
    refreshToken: string;
    accessExpiresAt: Date;
    refreshExpiresAt: Date;
}
