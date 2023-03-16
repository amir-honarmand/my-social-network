import { GetUserDto } from "./../dto/getUser.dto";
import { User } from "../models/user.model";
export declare const UserRepository: {
    getUser: (getUserDto: GetUserDto) => Promise<User | null>;
};
