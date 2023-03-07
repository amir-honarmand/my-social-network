import Joi from 'joi';
export declare const UserLoginDto: {
    body: {
        email: Joi.StringSchema<string>;
        password: Joi.StringSchema<string>;
    };
};
export interface UserLoginDto {
    email: string;
    password: string;
    salt: string;
}
