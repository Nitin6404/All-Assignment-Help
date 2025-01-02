const express = require('express');
const bcrypt = require('bcryptjs');
const User = require("../models/User");
const logger = require('../utils/logger');
const auth = require('../middleware/auth');
const router = express.Router();

// Simple in-memory rate limiter
const loginAttempts = new Map();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    
    if (loginAttempts.has(ip)) {
        const attempts = loginAttempts.get(ip);
        // Clean up old attempts
        const recentAttempts = attempts.filter(time => now - time < WINDOW_MS);
        
        if (recentAttempts.length >= MAX_ATTEMPTS) {
            return res.status(429).json({ 
                error: "Too many login attempts. Please try again later." 
            });
        }
        
        loginAttempts.set(ip, [...recentAttempts, now]);
    } else {
        loginAttempts.set(ip, [now]);
    }
    
    next();
};

// Create new user instance
const userModel = new User();

router.post("/add", async (req, res) => {
    try {
        logger.routeInfo(req, 'New user registration request received');
        
        const { name, email, password } = req.body;
        
        // Validate required fields
        if (!name || !email || !password) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Check if user already exists
        const exists = await userModel.userExists(email);
        if (exists) {
            logger.routeInfo(req, 'User already exists', { email });
            return res.status(409).json({ error: "User with this email already exists" });
        }

        const userId = await userModel.newUser(name, email, password);
        
        // Auto-login the user after registration
        const user = await userModel.getUserById(userId);
        const token = userModel.generateAuthToken(user);
        
        // Set cookie with token
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });
        
        logger.routeInfo(req, 'User registered and logged in successfully');
        
        // Return user data without sensitive information
        res.status(200).json({
            user: {
                id: userId,
                name,
                email,
                role: 'user',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            },
            token
        });
    } catch (error) {
        logger.routeError(req, error);
        console.error('Error in /add route:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/login", rateLimiter, async (req, res) => {
    try {
        logger.routeInfo(req, 'Login request received');
        
        const { email, password } = req.body;
        
        // Validate required fields
        if (!email || !password) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ 
                error: "Missing required fields",
                status: 400
            });
        }

        // Check if user exists
        const exists = await userModel.userExists(email);
        if (!exists) {
            logger.routeInfo(req, 'User not found', { email });
            return res.status(404).json({ 
                error: "No user found with this email. Please register first.",
                status: 404
            });
        }

        const user = await userModel.getUserByEmail(email);
        if (!user) {
            logger.routeInfo(req, 'User not found');
            return res.status(401).json({ 
                error: "Invalid credentials",
                status: 401
            });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            logger.routeInfo(req, 'Invalid password');
            return res.status(401).json({ 
                error: "Invalid credentials",
                status: 401
            });
        }

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user;

        const token = userModel.generateAuthToken(user);
        
        // Set cookie with token
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        logger.routeInfo(req, 'Login successful', { userId: user.id });
        res.json({
            user: userWithoutPassword,
            token,
            status: 200
        });
    } catch (error) {
        logger.routeError(req, error);
        res.status(500).json({ 
            error: "Internal server error",
            status: 500
        });
    }
});

router.post("/update-contact", async (req, res) => {
    try {
        logger.routeInfo(req, 'Contact update request received');
        
        const { userid, contact } = req.body;
        if (!userid || !contact) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ error: "Missing required fields" });
        }

        const result = await userModel.UpdateContactByUserID(contact, userid);
        
        logger.routeInfo(req, 'Contact updated successfully');
        res.status(200).json({ userid: result });
    } catch (error) {
        logger.routeError(req, error);
        console.error('Error in /update-contact route:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post("/update-password", async (req, res) => {
    try {
        logger.routeInfo(req, 'Password update request received');
        
        const { userid, password } = req.body;
        if (!userid || !password) {
            logger.routeInfo(req, 'Missing required fields');
            return res.status(400).json({ error: "Missing required fields" });
        }

        const result = await userModel.UpdatePasswordByUserID(password, userid);
        
        logger.routeInfo(req, 'Password updated successfully');
        res.status(200).json({ userid: result });
    } catch (error) {
        logger.routeError(req, error);
        console.error('Error in /update-password route:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get current user
router.get("/me", auth, async (req, res) => {
    try {
        logger.routeInfo(req, 'Get current user request received');
        
        // Get user ID from auth middleware
        const userId = req.user?.id;
        if (!userId) {
            logger.routeInfo(req, 'No user ID in request');
            return res.status(401).json({ error: "Unauthorized" });
        }

        // Get user from database
        const user = await userModel.getUserById(userId);
        if (!user) {
            logger.routeInfo(req, 'User not found');
            return res.status(404).json({ error: "User not found" });
        }

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user;

        // Generate new token
        const token = userModel.generateAuthToken(user);
        
        // Set cookie with token
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        res.json({
            user: userWithoutPassword,
            token
        });
    } catch (error) {
        logger.routeError(req, error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Logout user
router.post('/logout', async (req, res) => {
    try {
        // Clear the auth token from client
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        logger.error('Error during logout:', error);
        res.status(500).json({ error: 'Failed to logout' });
    }
});

module.exports = router;