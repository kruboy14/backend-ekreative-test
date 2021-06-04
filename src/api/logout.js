import express from 'express';

const router = express.Router();

router.get('/logout', async (req, res) => {
  req.logout();
  res.redirect('/login');
});

export default router;
