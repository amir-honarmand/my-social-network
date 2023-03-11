import { FavoriteStatus } from "../enums/favorite-status.enum";
export declare class Favorite {
    id: number;
    title: string;
    status: FavoriteStatus;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
