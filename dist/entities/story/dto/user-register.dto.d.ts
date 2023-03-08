import Joi from 'joi';
export declare const UserRegisterDto: {
    body: {
        first_name: Joi.StringSchema<string>;
        last_name: Joi.StringSchema<string>;
        user_name: Joi.StringSchema<string>;
        email: Joi.StringSchema<string>;
        password: Joi.StringSchema<string>;
        mobile: Joi.StringSchema<string>;
        favorites_id: Joi.ArraySchema<any[]>;
    };
};
export interface UserRegisterDto {
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    password: string;
    salt: string;
    mobile: string;
    favorites_id: [];
    timezone: string;
}
