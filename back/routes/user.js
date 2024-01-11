import express from 'express';
const router = express.Router();
import asyncHandler from '../config/asyncHandler.js'
import {admin, protect, auth} from '../config/authMiddleware.js'

import {
    // signinUser,
    loginUser,
    logoutUser, 
    signupUser, 
    deleteUser, 
    userProfile, 
    userUpdateProfile
} from '../controllers/user.js';

// router.get('/login', signinUser)
router.post('/signin', asyncHandler(loginUser));
router.post('/signup', signupUser)

router.post('/logout', logoutUser)

// router.get('/delete/:id', deleteUser)
router.get('/profile', asyncHandler(userProfile))
// router.get('/profile/:id', userUpdateProfile)

export default router;