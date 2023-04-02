import express, { Router } from 'express';
import authMiddleware from '../../../middlewares/auth';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import favoriteController from '../controllers/favorite.controller';
import { AddFavoriteDto } from '../dto/add-favorite.dto';
import { GetAllFavoriteDto } from '../dto/get-all-favorite.dto';
import { GetFavoriteDto } from '../dto/get-favorite.dto';

const favoriteRouter: Router = express.Router();

favoriteRouter.route('/op')
    .post(
        // authMiddleware.userAuthMiddleware, //! admin permission
        dtoValidator(AddFavoriteDto),
        favoriteController.addFavorite
    )
    .get(
        // authMiddleware.userAuthMiddleware,
        dtoValidator(GetAllFavoriteDto),
        favoriteController.getAllFavorite
    )

favoriteRouter.route('/op/:favoriteId')
    .get(
        // authMiddleware.userAuthMiddleware,
        dtoValidator(GetFavoriteDto),
        favoriteController.getFavorite
    )

export default favoriteRouter;