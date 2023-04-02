import express, { Router } from 'express';
import authMiddleware from '../../../middlewares/auth';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import tagController from '../controllers/tag.controller';
import { AddTagDto } from '../dto/add-tag.dto';
import { GetAllTagDto } from '../dto/get-all-tag.dto';
import { GetTagDto } from '../dto/get-tag.dto';

const tagRouter: Router = express.Router();

tagRouter.route('/op')
    .post(
        // authMiddleware.userAuthMiddleware,
        dtoValidator(AddTagDto),
        tagController.addTag
    )
    .get(
        // authMiddleware.userAuthMiddleware,
        dtoValidator(GetAllTagDto),
        tagController.getAllTag
    )

tagRouter.route('/op/:tagId')
    .get(
        // authMiddleware.userAuthMiddleware,
        dtoValidator(GetTagDto),
        tagController.getTag
    )

export default tagRouter;