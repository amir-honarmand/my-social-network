import express, { Router } from 'express';
import { registerController } from '../controllers/user.controller';
// import authMiddleware from '../../../middlewares/auth-middleware';
// import { userRegisterDto } from '../dto/user.dto';
// import { dtoValidator } from '../../../middlewares/dtoValidator';

const userRouter: Router = express.Router();

userRouter.route('/register')
.post(registerController)

export default userRouter;