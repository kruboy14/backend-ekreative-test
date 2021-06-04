import express from 'express';
import cors from 'cors';
import passport from 'passport';

import cookieSession from 'cookie-session';

import './db/index.js';
import api from './api/index.js';
import  './auth/passport.js'


const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: '*',
    credentials: true,
  }),
);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['secretcookieHellobuddy!'],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(api);

const PORT = 3333;

app.listen(PORT, () => {
  console.log('SERVER IS UP');
});
