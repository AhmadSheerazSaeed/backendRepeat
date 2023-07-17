import express from "express";
import { newUser, allUsers, userLogin } from "../controllers/userController.js";

const router = express.Router();

router.get("/allusers", allUsers);
router.post("/newuser", newUser);
router.post("/userlogin", userLogin);

export default router;
