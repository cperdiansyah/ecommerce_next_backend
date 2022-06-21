import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
    },
    icon: {
      type: String,
      required: [true, 'Image is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categoriesSchema);

export default Category;
