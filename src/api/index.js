import express from 'express';

import authGoogleApi from './authGoogle.js';
import authFacebookApi from './authFacebook.js';
import userApi from './user.js';
import logoutApi from './logout.js';

const router = express.Router();

router.use(authGoogleApi);
router.use(authFacebookApi);
router.use(userApi);
router.use(logoutApi);

export default router;
