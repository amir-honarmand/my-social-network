import Joi from 'joi';

export const UserLoginDto = {
    body: {
        email: Joi.string().email().lowercase().max(200).required(),
        password: Joi.string().required().max(200),
    },
};

export interface UserLoginDto {
    email: string;
    password: string;
    salt: string;
}