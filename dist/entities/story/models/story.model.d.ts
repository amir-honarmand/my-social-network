import { User } from "../../user/models/user.model";
import { StoryStatus } from "../enums/story-status.enum";
import { StoryDetails } from "./story-details.model";
export declare class Story {
    id: number;
    caption: string;
    content_url: string;
    status: StoryStatus;
    user_id: User | number;
    story_details_id: StoryDetails | number;
    favorites_id: number[];
    tags_id: number[];
    hide_statistics: boolean;
    turn_off_comments: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
