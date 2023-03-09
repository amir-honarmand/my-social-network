import express, { Router } from 'express';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import publicController from '../controllers/public.controller';
import { getStoryContentDto } from '../dto/get-story-content.dto';

const publicRouter: Router = express.Router();

publicRouter.route('/uploads/story-files/image/:filename')
.get(
    dtoValidator(getStoryContentDto),
    publicController.getStoryContent
);

export default publicRouter;