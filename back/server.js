import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import express from "express";
import cookieParser from 'cookie-parser';
import connectDB from "./config/db.js";
import passport from 'passport';
import LocalStrategy from 'passport-local'
import session from 'express-session'
import connectFlash from 'connect-flash';

import User from './models/users.js';
import sessionConfig from './config/session.js';

// routes
import user from './routes/user.js'
import post from './routes/post.js'

// run mongodb
connectDB();

// const port = process.env.PORT || 3000;
const app = express();

// body parser middleware
//make sure to write the body parser middleware prior to the routes.
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin: "*"
}))


// Create the session
app.use(session(sessionConfig));

//Passport middleware for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(connectFlash());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//flash middleware
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next()
})

app.use('/api/user', user)
app.use('/api/post', post)

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`running on port ${port}`))