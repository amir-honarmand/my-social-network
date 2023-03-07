import express, { Router } from 'express';
import { loginController, registerController } from '../controllers/user.auth.controller';
import authMiddleware from '../../../middlewares/auth';
import { UserRegisterDto } from '../dto/user-register.dto';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import { UserLoginDto } from '../dto/user-login.dto';
import { editUserAvatarController, getUserAvatarController } from '../controllers/user.controller';

const userRouter: Router = express.Router();

userRouter.route('/auth/register')
.post(dtoValidator(UserRegisterDto), registerController)

userRouter.route('/auth/login')
.post(dtoValidator(UserLoginDto), loginController)

userRouter.route('/avatar')
.put(authMiddleware.userAuthMiddleware, /* dtoValidator() ,*/ editUserAvatarController)
.get(authMiddleware.userAuthMiddleware, /* dtoValidator() ,*/ getUserAvatarController)

export default userRouter;