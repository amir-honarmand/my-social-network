import { BaseError } from "../../../utils/error-handler";
import { UserRegisterDto } from "../dto/user-register.dto";
import { UserLoginDto } from "../dto/user-login.dto";
export declare const register: (body: UserRegisterDto) => Promise<boolean | BaseError>;
export declare const login: (userDto: UserLoginDto) => Promise<object | BaseError>;
