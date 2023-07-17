import express from "express";
import { auth } from "../middleware/auth.js";
import { newUser, allUsers, userLogin } from "../controllers/userController.js";

const router = express.Router();

router.get("/allusers", auth, allUsers);
router.post("/newuser", newUser);
router.post("/userlogin", userLogin);

export default router;
