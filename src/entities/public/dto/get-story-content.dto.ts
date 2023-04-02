import Joi from "joi";

export const getStoryContentDto = {
    params: {
        filename: Joi.string().max(200).required(),
    },
};