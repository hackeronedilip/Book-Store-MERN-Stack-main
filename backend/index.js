import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { PORT, mongoDBURL, CLIENT_ORIGIN } from './config.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for handling CORS POLICY (Custom Origin)
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Welcome To MERN Stack Tutorial');
});

// Books route
app.use('/books', booksRoute);

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack trace
  res.status(500).json({ message: 'Internal server error' });
});

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });
