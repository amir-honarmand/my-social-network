import { TagStatus } from "../enums/tag-status.enum";
export declare class Tag {
    id: number;
    title: string;
    status: TagStatus;
    used_count: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
