import { Router } from "express";
import{ userRegister, usersLogin, userLogout} from "../controls/authRoutes.js"

const authRoute = Router();

// Register route
authRoute.post('/register', userRegister);


// Login route
authRoute.post('/login', usersLogin);


// Logout route
authRoute.post('/logout', userLogout); 



export default authRoute
