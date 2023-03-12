import Joi from 'joi';

export const GetAllStoryDto = {
    query: {
        page: Joi.number().integer().min(1).default(1).max(10000),
        limit: Joi.number().integer().min(0).default(20).max(30),
    },
};

export interface GetAllStoryDto {
    page: number;
    limit: number;
}