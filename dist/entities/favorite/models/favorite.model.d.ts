import { FavoriteStatus } from "../enums/favorite-status.enum";
export declare class Favorite {
    id: number;
    title: string;
    status: FavoriteStatus;
    used_count: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
