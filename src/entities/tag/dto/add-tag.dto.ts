import Joi from 'joi';

export const AddTagDto = {
    body: {
        title: Joi.string().max(30),
    },
};

export interface AddTagDto {
    title: string;
}