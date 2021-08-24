import express from "express";
const router = express.Router();
import {
  getTestimonials,
  createTestimonial,
  getTestimonialById,
  deleteTestimonial,
  updateTestimonial,
} from "../controllers/testimonialController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getTestimonials).post(protect, admin, createTestimonial);
router
  .route("/:id")
  .get(getTestimonialById)
  .delete(protect, admin, deleteTestimonial)
  .put(protect, admin, updateTestimonial);

export default router;
