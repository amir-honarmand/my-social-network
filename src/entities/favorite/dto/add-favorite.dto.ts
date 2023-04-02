import Joi from 'joi';

export const AddFavoriteDto = {
    body: {
        title: Joi.string().max(30),
    },
};

export interface AddFavoriteDto {
    title: string;
}