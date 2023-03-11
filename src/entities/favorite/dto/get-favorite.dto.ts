import Joi from 'joi';

export const GetFavoriteDto = {
    params: {
        favoriteId: Joi.number().min(1).required()
    },
};

export interface GetFavoriteDto {
    favoriteId: number;
}