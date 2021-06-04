import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['email'],
  }),
);
router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    failureMessage: 'error facebook login',
    successRedirect: 'http://localhost:3000/login/success',
  }),
  (req, res) => {
    console.log('USER', req.user);

    res.send('ty for log in');
  },
);

export default router;