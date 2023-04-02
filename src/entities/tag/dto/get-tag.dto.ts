import Joi from 'joi';

export const GetTagDto = {
    params: {
        tagId: Joi.number().min(1),
    },
};

export interface GetTagDto {
    tagId: number;
}