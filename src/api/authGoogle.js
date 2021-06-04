import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    failureMessage: 'error google login',
    successRedirect: 'http://localhost:3000/login/success',
  }),
  (req, res) => {
    console.log('USER', req.user);
    res.send('ty for log in');
  },
);

export default router;
