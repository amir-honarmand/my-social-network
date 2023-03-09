import Joi from 'joi';

export const GetStoryDto = {
    params: {
        storyId: Joi.string().max(200).required()
    },
};

export interface GetStoryDto {
    storyId: string;
}