import { Story } from "./story.model";
export declare class StoryDetails {
    id: number;
    view_count: number;
    like_count: number;
    comment_count: number;
    share_count: number;
    story_id: Story | number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
