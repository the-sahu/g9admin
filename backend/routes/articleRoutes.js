import express from "express";
const router = express.Router();
import {
  getArticles,
  getArticleById,
  createArticle,
  deleteArticle,
  updateArticle,
  //   deleteArticleComment,
} from "../controllers/articleController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getArticles).post(protect, admin, createArticle);
// router.route('/:id/comments').post(protect, createArticleComment)

router
  .route("/:id")
  .get(getArticleById)
  .delete(protect, admin, deleteArticle)
  .put(protect, admin, updateArticle);

export default router;
