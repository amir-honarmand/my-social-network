import express, { Router } from "express";
import userRouter from "../entities/user/router/user.router";

const router: Router = express.Router();

router.use('/user', userRouter);

export default router;