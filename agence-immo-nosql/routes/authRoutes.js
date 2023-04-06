import express from "express";
import { login, register, createAccount } from "../controllers/authController.js";

const router = express.Router();

router.get("/login", login);
router.get("/register", register);
router.post("/register", createAccount);

export default router;
