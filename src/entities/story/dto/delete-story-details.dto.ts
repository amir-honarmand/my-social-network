import Joi from 'joi';

export const DeleteStoryDetailsDto = {
    params: {
        storyDetailsId: Joi.number().min(1).required(),
    },
};

export interface DeleteStoryDetailsDto {
    storyDetailsId: number;
}