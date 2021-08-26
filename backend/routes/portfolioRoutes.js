import express from "express";
const router = express.Router();
import {
  getPortfolios,
  getPortfolioById,
  createPortfolio,
  deletePortfolio,
  updatePortfolio,
  getPortfolioByClientId,
  //   deletePortfolioComment,
} from "../controllers/portfolioController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getPortfolios).post(protect, admin, createPortfolio);
router.route("/:id/client").get(protect, getPortfolioByClientId);

router
  .route("/:id")
  .get(getPortfolioById)
  .delete(protect, admin, deletePortfolio)
  .put(protect, admin, updatePortfolio);

export default router;
