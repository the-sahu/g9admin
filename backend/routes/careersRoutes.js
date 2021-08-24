import express from 'express'
const router = express.Router()
import {
  createCareer,
  getCareers,
  getCareersById,
  deleteCareer,
  updateCareer,
} from '../controllers/careersController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCareers).post(protect, admin, createCareer)
router
  .route('/:id')
  .get(getCareersById)
  .delete(protect, admin, deleteCareer)
  .put(protect, admin, updateCareer)

export default router
