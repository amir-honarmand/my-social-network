import Joi from 'joi';

export const GetStoryDto = {
    params: {
        storyId: Joi.number().min(1).required()
    },
};

export interface GetStoryDto {
    storyId: number;
}