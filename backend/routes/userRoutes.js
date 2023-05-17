import express from "express";
const router = express.Router()

// importing controllers
import { register } from "../controllers/userController.js";

// creaitng routes

// register a new user document in collection like User Model
router.route('/register').post(register);


export default router;