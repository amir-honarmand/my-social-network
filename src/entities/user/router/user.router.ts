import express, { Router } from 'express';
import { loginController, registerController } from '../controllers/user.controller';
// import authMiddleware from '../../../middlewares/auth-middleware';
import { UserRegisterDto } from '../dto/user-register.dto';
import { dtoValidator } from '../../../middlewares/dtoValidator';
import { UserLoginDto } from '../dto/user-login.dto';

const userRouter: Router = express.Router();

userRouter.route('/register')
.post(dtoValidator(UserRegisterDto), registerController)

userRouter.route('/login')
.post(dtoValidator(UserLoginDto), loginController)

export default userRouter;