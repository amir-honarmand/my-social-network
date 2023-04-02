import Joi from 'joi';
import { StoryStatus } from '../enums/story-status.enum';

export const AddStoryDto = {
    body: {
        caption: Joi.string().max(800),
        favorites_id: Joi.array().items(Joi.number().required()).required(),
        tags_id: Joi.array().items(Joi.number().required()),
        hide_statistics: Joi.boolean().default(false),
        turn_off_comments: Joi.boolean().default(false),
        // status: Joi.string().allow('unpublished', 'published'),
    },
};

export interface AddStoryDto {
    caption: string;
    content_url: string;
    status: StoryStatus;
    user_id: number;
    story_details_id: number;
    favorites_id: number[];
    tags_id: number[];
    hide_statistics: boolean;
    turn_off_comments: boolean;
}