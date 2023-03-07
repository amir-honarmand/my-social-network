import { UserRegisterDto } from "../dto/user-register.dto";
import { User } from "../models/user.model";
export declare const UserRepository: {
    removeUserSession: (userId: number) => Promise<void>;
    addUserSession: (userId: number, accessToken: string, refreshToken: string, accessExpiresAt: Date, refreshExpiresAt: Date) => Promise<void>;
    registerUser: (user: UserRegisterDto) => Promise<void>;
    findByEmail: (userEmail: string) => Promise<User | null>;
};
