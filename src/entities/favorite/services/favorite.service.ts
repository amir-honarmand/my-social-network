import { HttpStatusCodes, HttpStatusMessages } from "../../../shared/http-status-code";
import { BaseError } from "../../../utils/error-handler";
import { AddFavoriteDto } from "../dto/add-favorite.dto";
import { GetAllFavoriteDto } from "../dto/get-all-favorite.dto";
import { GetFavoriteDto } from "../dto/get-favorite.dto";
import { favoriteRepository } from "../repository/favorite.repository";

const addFavorite = async (addFavoriteDto: AddFavoriteDto): Promise<boolean | BaseError> => {
    await favoriteRepository.addFavorite(addFavoriteDto);
    return true;
}

const getFavorite = async (getFavoriteDto: GetFavoriteDto): Promise<object | BaseError> => {
    const favorite = await favoriteRepository.getFavorite(getFavoriteDto);
    return favorite;
}

const getAllFavorite = async (getAllFavoriteDto: GetAllFavoriteDto): Promise<object | BaseError> => {
    const favorite = await favoriteRepository.getAllFavorite(getAllFavoriteDto);
    return {
        count: favorite[1],
        page: getAllFavoriteDto.page,
        limit: getAllFavoriteDto.limit,
        rows: favorite[0],
    };
}

export default {
    addFavorite,
    getFavorite,
    getAllFavorite
}