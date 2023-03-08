import { BaseError } from "../../../utils/error-handler";
export declare const register: (body: UserRegisterDto) => Promise<boolean | BaseError>;
export declare const login: (userDto: UserLoginDto) => Promise<object | BaseError>;
