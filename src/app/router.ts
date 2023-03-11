import express, { Router } from "express";
import favoriteRouter from "../entities/favorite/router/favorite.router";
import publicRouter from "../entities/public/router/public.router";
import storyRouter from "../entities/story/router/story.router";
import tagRouter from "../entities/tag/router/tag.router";
import userRouter from "../entities/user/router/user.router";

const router: Router = express.Router();

router.use('/public', publicRouter);
router.use('/user', userRouter);
router.use('/story', storyRouter);
router.use('/favorite', favoriteRouter);
router.use('/tag', tagRouter);

export default router;