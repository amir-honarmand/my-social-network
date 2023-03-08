import { User } from "../../user/models/user.model";
import { Story } from "./story.model";
export declare class Comment {
    id: number;
    caption: string;
    user_id: User | number;
    story_id: Story | number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
