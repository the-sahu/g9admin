import express from 'express';
const router = express.Router();
import {
  createWithdrawFundsRequest, deleteWithdrawFundsRequest, getWithdrawFundsRequest
} from '../controllers/withdrawFundsController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").post(protect,createWithdrawFundsRequest).get(getWithdrawFundsRequest);

router.route('/:id')
.delete(protect, admin, deleteWithdrawFundsRequest);
  

export default router;
