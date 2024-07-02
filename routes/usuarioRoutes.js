import express from "express";
import { formularioLogin, formularioRegistro, formularioOLvidePassword } from "../controllers/usuarioController.js";




const router = express.Router();

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/olvidePassword, formularioOLvidePassword');





export default router;