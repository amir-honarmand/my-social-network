import { Storyboard } from "../../storyboard/models/storyboard.model";
import { User } from "../../user/models/user.model";
import { StoryStatus } from "../enums/story-status.enum";
import { StoryDetails } from "./story-details.model";
export declare class Story {
    id: number;
    caption: string;
    content_url: string;
    status: StoryStatus;
    storyboard_id: Storyboard | number;
    user_id: User | number;
    story_details_id: StoryDetails | number;
    favorites_id: number[];
    tags_id: number[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
