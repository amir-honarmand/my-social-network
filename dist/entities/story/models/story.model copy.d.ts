import { User } from "../../user/models/user.model";
export declare class Story {
    id: number;
    caption: string;
    content_url: string;
    status: [];
    user_id: User | number;
    favorites_id: [];
    tags_id: [];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
