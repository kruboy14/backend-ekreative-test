import FacebookStrat from 'passport-facebook';
import { Strategy as GoogleStrat } from 'passport-google-oauth20';
import passport from 'passport';

import { GOOGLE, FACEBOOK } from '../config/index.js';
import User from '../models/user.js';

passport.use(
  new FacebookStrat(
    {
      clientID: FACEBOOK.clientID,
      clientSecret: FACEBOOK.clientSecret,
      callbackURL: 'http://localhost:3333/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'emails', 'photos'],
    },
    async (accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        fullName: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        facebookId: profile.id,
      };

      const user = await User.findOneAndUpdate(
        { facebookId: profile.id },
        defaultUser,
        { upsert: true, new: true },
      ).catch((e) => {
        cb(err, null);
      });
      if (user) {
        return cb(null, user);
      }
    },
  ),
);

passport.use(
  new GoogleStrat(
    {
      clientID: GOOGLE.clientID,
      clientSecret: GOOGLE.clientSecret,
      callbackURL: 'http://localhost:3333/google/callback',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        fullName: profile.displayName,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };

      const user = await User.findOneAndUpdate(
        { googleId: profile.id },
        defaultUser,
        { upsert: true, new: true },
      ).catch((err) => {
        console.log('1');
        cb(err, null);
      });

      if (user) {
        return cb(null, user);
      }
    },
  ),
);

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await User.findById(id).catch((err) => {
    cb(err, null);
  });

  if (user) {
    cb(null, user);
  }
});
