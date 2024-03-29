import Joi from 'joi';
import { StoryStatus } from '../enums/story-status.enum';

export const EditStoryDto = {
    body: {
        id: Joi.number().min(1).required(),
        caption: Joi.string().max(800),
        favorites_id: Joi.array().items(Joi.number().required()),
        tags_id: Joi.array().items(Joi.number().required()),
        status: Joi.string().allow('unpublished', 'published'),
        turn_off_comments: Joi.boolean(),
    },
};

export interface EditStoryDto {
    id: number;
    caption: string;
    content_url: string;
    status: StoryStatus;
    user_id: number;
    story_details_id: number;
    favorites_id: number[];
    tags_id: number[];
    turn_off_comments: boolean;
}