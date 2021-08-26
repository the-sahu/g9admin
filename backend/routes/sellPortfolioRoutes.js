import express from "express";
const router = express.Router();

import { createSellPortfolio, deleteSellPortfolio, getSellPortfolioByClientId, getSellPortfolioById, getSellPortfolios, updateSellPortfolio } from "../controllers/sellPortfolioController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getSellPortfolios).post(protect, admin, createSellPortfolio);
router.route("/:id/client").get(protect, getSellPortfolioByClientId);

router
  .route("/:id")
  .get(getSellPortfolioById)
  .delete(protect, admin, deleteSellPortfolio)
  .put(protect, admin, updateSellPortfolio);

export default router;
