import express from 'express';
import {
  getCategories,
  getCategoryById,
} from '../controllers/categoryController.js';
const router = express.Router();

router.route('/').get(getCategories);

router.route('/:id').get(getCategoryById);

export default router;
