import express from 'express';

import { isUserAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/user', isUserAuth, (req, res) => {
  res.send(req.user);
});

export default router;
