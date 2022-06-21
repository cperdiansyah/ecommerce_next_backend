import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';

/* Routes */
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';

/* Exception Handler */
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

/* Product routes */
app.use('/api/products', productRoutes);

/* Category Routes */
app.use('/api/category', categoryRoutes);

/* User Routes */
app.use('/api/users', userRoutes);

/* Order Routes */
// app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
