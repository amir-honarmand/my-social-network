import Joi from 'joi';
import { StoryStatus } from '../enums/story-status.enum';
export declare const AddStoryDto: {
    body: {
        caption: Joi.StringSchema<string>;
        favorites_id: Joi.ArraySchema<any[]>;
        tags_id: Joi.ArraySchema<any[]>;
    };
};
export interface AddStoryDto {
    caption: string;
    content_url: string;
    status: StoryStatus;
    user_id: number;
    story_details_id: number;
    favorites_id: number[];
    tags_id: number[];
}
