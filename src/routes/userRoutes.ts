import { Router } from "express";
import { listUsers, usersLogin, usersSignup } from "../controllers/usersController";


const userRouter = Router();


userRouter.post('/users/signup', usersSignup);

userRouter.get('/users', listUsers);

userRouter.post('/users/login', usersLogin);

export default userRouter;