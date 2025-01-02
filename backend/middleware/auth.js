const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

const auth = async (req, res, next) => {
    try {
        // Get token from cookie or Authorization header
        let token = req.cookies.token;
        if (!token && req.headers.authorization) {
            token = req.headers.authorization.replace('Bearer ', '');
        }

        if (!token) {
            logger.info('No token provided');
            return res.status(401).json({ error: 'Please authenticate' });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Check token expiration
            if (decoded.exp && Date.now() >= decoded.exp * 1000) {
                logger.info('Token expired');
                res.clearCookie('token');
                return res.status(401).json({ error: 'Token expired' });
            }
            
            req.user = decoded;
            next();
        } catch (error) {
            logger.error('Token verification failed', { error: error.message });
            // Clear invalid token
            res.clearCookie('token');
            return res.status(401).json({ error: 'Invalid token' });
        }
    } catch (error) {
        logger.error('Auth middleware error', { error: error.message });
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = auth;
