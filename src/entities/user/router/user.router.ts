import express, { Router } from 'express';
import authMiddleware from '../../../middlewares/auth';
import { UserRegisterDto } from '../dto/user-register.dto';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import { UserLoginDto } from '../dto/user-login.dto';
import userAuthController from '../controllers/user.auth.controller';
import userController from '../controllers/user.controller';
import { GetUserDto } from '../dto/getUser.dto';

const userRouter: Router = express.Router();

// user auth routes
//! recaptcha middleware
userRouter.route('/auth/register')
.post(dtoValidator(UserRegisterDto), userAuthController.register)
//! recaptcha middleware
userRouter.route('/auth/login')
.post(dtoValidator(UserLoginDto), userAuthController.login)

// user avatar route
userRouter.route('/profile/avatar')
.put(authMiddleware.userAuthMiddleware, /* dtoValidator() ,*/ userController.editUserAvatar)
.get(authMiddleware.userAuthMiddleware, /* dtoValidator() ,*/ userController.getUserAvatar)

// user routes
userRouter.route('/profile/:userId')
.get(authMiddleware.userAuthMiddleware, dtoValidator(GetUserDto) , userController.getUser)

export default userRouter;