import express from 'express';
const router = express.Router();
import { createFundsRequest, 
  deleteFundsRequest,
   getFundsRequest, } from '../controllers/addFundsController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route("/").post(protect,createFundsRequest).get(getFundsRequest);

router.route('/:id')
.delete(protect, admin, deleteFundsRequest);
  

export default router;
