import express, { Router } from 'express';
import authMiddleware from '../../../middlewares/auth';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import storyController from '../controllers/story.controller';
import { AddStoryDto } from '../dto/add-story.dto';
import uploader from '../../../middlewares/uploader';
import { GetStoryDto } from '../dto/get-story.dto';
import { GetAllStoryDto } from '../dto/get-all-story.dto';
import { EditStoryDto } from '../dto/edit-story.dto';
import { DeleteStoryDto } from '../dto/delete-story.dto';

const storyRouter: Router = express.Router();

storyRouter.route('/op')
    .post(
        authMiddleware.userAuthMiddleware,
        uploader.storyFileUpload.single('content-file'),
        dtoValidator(AddStoryDto),
        storyController.addStory
    )
    .put(
        authMiddleware.userAuthMiddleware,
        dtoValidator(EditStoryDto),
        storyController.editStory
    )
    .get(
        authMiddleware.userAuthMiddleware,
        dtoValidator(GetAllStoryDto),
        storyController.getAllStory
    )

storyRouter.route('/op/:storyId')
    .get(
        authMiddleware.userAuthMiddleware,
        dtoValidator(GetStoryDto),
        storyController.getStory
    )
    .delete(
        authMiddleware.userAuthMiddleware,
        dtoValidator(DeleteStoryDto),
        storyController.deleteStory
    )

export default storyRouter;