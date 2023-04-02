import { postgres } from "../../../database/postgres";
import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { pagination } from "../../../utils/pagination";
import { AddFavoriteDto } from "../dto/add-favorite.dto";
import { GetAllFavoriteDto } from "../dto/get-all-favorite.dto";
import { GetFavoriteDto } from "../dto/get-favorite.dto";
import { FavoriteStatus } from "../enums/favorite-status.enum";
import { Favorite } from "../models/favorite.model";

export const favoriteRepository = (() => {
    async function addFavorite(addFavoriteDto: AddFavoriteDto): Promise<void> {
        await postgres.getRepository(Favorite).insert({
            title: addFavoriteDto.title
        });
    }

    async function getFavorite(getFavoriteDto: GetFavoriteDto): Promise<Favorite> {
        const favorite = await postgres.getRepository(Favorite).findOne({
            where: {
                id: getFavoriteDto.favoriteId,
                status: FavoriteStatus.ACTIVE
            },
            select: ['id', 'title'],
        });

        if (!favorite) {
            throw new BaseError(HttpStatusMessages.NOT_FOUND, HttpStatusCodes.NOT_FOUND, '')
        };

        return favorite;
    }

    async function getAllFavorite(getAllFavoriteDto: GetAllFavoriteDto): Promise<[Favorite[], number]> {
        const skip: number = pagination(getAllFavoriteDto.page, getAllFavoriteDto.limit);

        const favorites = await postgres.getRepository(Favorite).findAndCount({
            where: {status: FavoriteStatus.ACTIVE},
            skip,
            take: getAllFavoriteDto.limit,
            select: ['id', 'title'],
        });

        return favorites;
    }

    return {
        addFavorite,
        getFavorite,
        getAllFavorite
    };
})();