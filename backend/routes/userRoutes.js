import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  forgotPassword,
  resetPassword,
  getUserById,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

router
  .route("/:id")
  .get(getUserById)
  // .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
