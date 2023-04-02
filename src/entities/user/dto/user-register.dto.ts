import Joi from 'joi';

export const UserRegisterDto = {
    body: {
        first_name: Joi.string()
            .regex(/^(?=.{2,32}$)(?![ ])(?!.[ ]{2})[a-zA-Z0-9_.-u0600-u06FF ]+(?![ ])$/)
            .required(),
        last_name: Joi.string()
            .regex(/^(?=.{2,32}$)(?![ ])(?!.[ ]{2})[a-zA-Z0-9_.-u0600-u06FF ]+(?![ ])$/)
            .required(),
        user_name: Joi.string().required().max(30),
        email: Joi.string().email().lowercase().max(200).required(),
        password: Joi.string().regex(/^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/).required(),
        mobile: Joi.string().max(20),
        favorites_id: Joi.array(),
    },
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