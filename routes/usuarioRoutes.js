import express from "express";

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('auth/login')
});

router.get('/nosotros', (req, res) => {
  res.send('Informacion de nosotros')
});

export default router;