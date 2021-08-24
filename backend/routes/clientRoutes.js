import express from "express";
const router = express.Router();
import {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
} from "../controllers/clientController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getClients).post(protect, admin, createClient);
router
  .route("/:id")
  .get(getClientById)
  .delete(protect, admin, deleteClient)
  .put(protect, admin, updateClient);

export default router;
