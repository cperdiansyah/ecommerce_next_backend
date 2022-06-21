import asyncHandler from 'express-async-handler';
import Category from '../models/categoryModels.js';

// @desc Fetch all categories
// @route GET /api/categories
// @access Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  if (categories) {
    res.status(200).json(categories);
  } else {
    res.status(404);
    throw new Error('Categories not found');
  }
});

//desc Get a single category
//@route GET /api/category/:id
//@access Public
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (category) {
    res.status(200).json(category);
  } else {
    res.status(404);
    throw new Error('Category not found');
  }
});

export { getCategories, getCategoryById };
