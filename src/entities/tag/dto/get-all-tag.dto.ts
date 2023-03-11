import Joi from 'joi';

export const GetAllTagDto = {
    query: {
        page: Joi.number().integer().min(1).default(1).max(1000),
        limit: Joi.number().integer().min(0).default(30).max(100),
    },
};

export interface GetAllTagDto {
    page: number;
    limit: number;
}