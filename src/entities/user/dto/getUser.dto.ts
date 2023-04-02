import Joi from 'joi';

export const GetUserDto = {
    params: {
        userId: Joi.number().min(1).required(),
    },
};

export interface GetUserDto {
    userId: number
}