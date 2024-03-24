import express from 'express';
import { SignIn, SignUp } from '../Controller/UserController.js';
const routeUser = express.Router();
routeUser.post('/register', SignUp);
routeUser.post('/signin', SignIn);
export default routeUser;
