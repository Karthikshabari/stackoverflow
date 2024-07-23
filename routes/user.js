import express from 'express';
import { login, signup } from '../controllers/auth.js';
import {getAllUsers} from '../controllers/users.js'
const router = express.Router();

router.post('/signup', signup);  // <-- Use the signup controller function
router.post('/login', login);  // <-- Use the login controller function

router.get('/getAllUsers', getAllUsers)

export default router;
