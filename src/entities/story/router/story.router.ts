import express, { Router } from 'express';
import authMiddleware from '../../../middlewares/auth';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import storyController from '../controllers/story.controller';
import { AddStoryDto } from '../dto/add-story.dto';
import uploader from '../../../middlewares/uploader';

const storyRouter: Router = express.Router();

storyRouter.route('/op')
.post(
    authMiddleware.userAuthMiddleware,
    uploader.storyFileUpload.single('content-file'),
    dtoValidator(AddStoryDto),
    storyController.addStory
)
// .put(/* dtoValidator() ,*/ )

export default storyRouter;