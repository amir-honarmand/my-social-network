import Joi from 'joi';

export const DeleteStoryDto = {
    params: {
        storyId: Joi.number().min(1).required(),
    },
};

export interface DeleteStoryDto {
    storyId: number;
}