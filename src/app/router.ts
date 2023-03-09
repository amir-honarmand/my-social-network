import express, { Router } from "express";
import publicRouter from "../entities/public/router/public.router";
import storyRouter from "../entities/story/router/story.router";
import userRouter from "../entities/user/router/user.router";

const router: Router = express.Router();

router.use('/public', publicRouter);
router.use('/user', userRouter);
router.use('/story', storyRouter);

export default router;