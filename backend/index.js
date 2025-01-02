require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');
const ensureDirectories = require('./utils/ensureDirectories');

// Ensure required directories exist
ensureDirectories();

const OrdersRouter = require('./routes/OrdersRoute');
const AdminRouter = require('./routes/AdminRoute');
const UserRouter = require('./routes/UserRoute');

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: [
    process.env.FRONTEND_URL,
    'http://localhost:3002',
    'https://all-assignment-help.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/', OrdersRouter);
app.use('/admin/', AdminRouter);
app.use('/user/', UserRouter);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Error handling
app.use((err, req, res, next) => {
    logger.error('Global error handler:', err);
    res.status(500).json({ error: 'Internal server error' });
});

app.use(errorHandler);

// Handle 404
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception:', error);
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});