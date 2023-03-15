import { customAlphabet } from "nanoid/async";
import redis from "../../../database/redis-config";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { Token } from "../../../utils/jwt";
import { BaseError } from "../../../utils/error-handler";
import { UserRepository } from "../repository/user.repository";
import { UserRegisterDto } from "../dto/user-register.dto";
import { generatePass, validatePass } from "../../../utils/password";
import { UserLoginDto } from "../dto/user-login.dto";
import { role } from "../../../shared/roles.enum";

export const register = async (body: UserRegisterDto): Promise<boolean | BaseError> => {
    const password = await generatePass(body.password);
    
    const userRegisterDetails = {
        ...body,
        salt: password.salt,
        password: password.hash
    };
    
    await UserRepository.registerUser(userRegisterDetails);
    
    return true;
}

/* handle login */
export const login = async (userDto: UserLoginDto): Promise<object | BaseError> => {
    /* find user */
    const user = await UserRepository.findByEmail(userDto.email);
    
    /* password validation */
	const checkPassword = await validatePass(userDto.password, user.salt, user.password);
    if(!checkPassword)
    throw new BaseError(HttpStatusMessages.NOT_FOUND, HttpStatusCodes.NOT_FOUND, `Email or password incorrect!`);

    /* token generate */
	const token: Token = new Token((user.id), role.USER);
    const refreshToken: string = token.generateRefresh();
	const accessToken: string = token.generateAccess();

    await UserRepository.removeUserSession(user.id);

    //* add to user activity

    await UserRepository.addUserSession(
        user.id,
        accessToken,
        refreshToken,
        token.accessExpiresAt,
        token.refreshExpiresAt,
    );

    return {
        user: {id: user.id},
        accessToken: {
            token: accessToken,
			expiresAt: token.accessExpiresAt,
		},
        refreshToken: {
            token: refreshToken,
            expiresAt: token.refreshExpiresAt,
        },
	};
}
