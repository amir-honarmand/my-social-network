import Joi from 'joi';
import { StoryStatus } from '../enums/story-status.enum';
export declare const AddStoryDto: {
    body: {
        caption: Joi.StringSchema<string>;
        favorites_id: Joi.ArraySchema<any[]>;
        tags_id: Joi.ArraySchema<any[]>;
        hide_statistics: Joi.BooleanSchema<boolean>;
        turn_off_comments: Joi.BooleanSchema<boolean>;
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
    hide_statistics: boolean;
    turn_off_comments: boolean;
}
