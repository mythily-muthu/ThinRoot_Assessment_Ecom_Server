// const express = require('express');
import express from "express";
import { registerUser } from '../controllers/users.js';
const router = express.Router();
//routes

//register route
router.post("/register", registerUser);
//login route
router.post("/login");

export default router;
