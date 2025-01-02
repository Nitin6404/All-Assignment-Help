const Database = require("./Database");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

class User {
    constructor() {
        logger.info('User model initialized');
    }

    async newUser(name, email, password) {
        const db = new Database();
        logger.info('Creating new user', { name, email });
        
        try {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
            logger.dbOperation('Hash password', { email });
            
            // Create user with role
            const sql = `INSERT INTO users (name, email, password, role, createdAt, updatedAt) 
                        VALUES (?, ?, ?, ?, ?, ?)`;
            const values = [
                name,
                email,
                hashedPassword,
                'user',
                new Date().toISOString(),
                new Date().toISOString()
            ];

            logger.dbOperation('Insert user', { email, sql });

            return new Promise((resolve, reject) => {
                db.db.run(sql, values, function(err) {
                    if (err) {
                        logger.error('Error creating user', { error: err.message, email });
                        reject(err);
                        return;
                    }
                    logger.info('User created successfully', { userId: this.lastID, email });
                    resolve(this.lastID);
                });
            });
        } catch (error) {
            logger.error('Error in newUser', { error: error.message, email });
            throw error;
        } finally {
            db.close();
            logger.dbOperation('Close database connection', { operation: 'newUser' });
        }
    }

    async getUserByEmail(email) {
        const db = new Database();
        logger.info('Getting user by email', { email });
        
        try {
            const sql = `SELECT * FROM users WHERE email = ?`;
            const values = [email];
            
            logger.dbOperation('Get user by email', { email, sql });

            return new Promise((resolve, reject) => {
                db.db.get(sql, values, function(err, row) {
                    if (err) {
                        logger.error('Error getting user', { error: err.message, email });
                        reject(err);
                        return;
                    }
                    logger.info('User found', { email });
                    resolve(row);
                });
            });
        } catch (error) {
            logger.error('Error in getUserByEmail', { error: error.message, email });
            throw error;
        } finally {
            db.close();
            logger.dbOperation('Close database connection', { operation: 'getUserByEmail' });
        }
    }

    async getUserById(id) {
        const db = new Database();
        logger.info('Getting user by ID', { id });
        
        try {
            const sql = `SELECT * FROM users WHERE id = ?`;
            const values = [id];
            
            logger.dbOperation('Get user by ID', { id, sql });

            return new Promise((resolve, reject) => {
                db.db.get(sql, values, function(err, row) {
                    if (err) {
                        logger.error('Error getting user', { error: err.message, id });
                        reject(err);
                        return;
                    }
                    logger.info('User found', { id });
                    resolve(row);
                });
            });
        } catch (error) {
            logger.error('Error in getUserById', { error: error.message, id });
            throw error;
        } finally {
            db.close();
            logger.dbOperation('Close database connection', { operation: 'getUserById' });
        }
    }

    async UpdateContactByUserID(contact, userid) {
        const db = new Database();
        logger.info('Updating user contact', { userid, contact });
        
        try {
            const sql = `UPDATE users SET contact = ?, updatedAt = ? WHERE id = ?`;
            const values = [contact, new Date().toISOString(), userid];
            
            logger.dbOperation('Update contact', { userid, sql });

            return new Promise((resolve, reject) => {
                db.db.run(sql, values, function(err) {
                    if (err) {
                        logger.error('Error updating contact', { error: err.message, userid });
                        reject(err);
                        return;
                    }
                    logger.info('Contact updated successfully', { userid });
                    resolve(userid);
                });
            });
        } catch (error) {
            logger.error('Error in UpdateContactByUserID', { error: error.message, userid });
            throw error;
        } finally {
            db.close();
            logger.dbOperation('Close database connection', { operation: 'UpdateContactByUserID' });
        }
    }

    async UpdatePasswordByUserID(password, userid) {
        const db = new Database();
        logger.info('Updating user password', { userid });
        
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            logger.dbOperation('Hash new password', { userid });
            
            const sql = `UPDATE users SET password = ?, updatedAt = ? WHERE id = ?`;
            const values = [hashedPassword, new Date().toISOString(), userid];
            
            logger.dbOperation('Update password', { userid, sql });

            return new Promise((resolve, reject) => {
                db.db.run(sql, values, function(err) {
                    if (err) {
                        logger.error('Error updating password', { error: err.message, userid });
                        reject(err);
                        return;
                    }
                    logger.info('Password updated successfully', { userid });
                    resolve(userid);
                });
            });
        } catch (error) {
            logger.error('Error in UpdatePasswordByUserID', { error: error.message, userid });
            throw error;
        } finally {
            db.close();
            logger.dbOperation('Close database connection', { operation: 'UpdatePasswordByUserID' });
        }
    }

    async userExists(email) {
        const db = new Database();
        logger.info('Checking if user exists', { email });
        
        try {
            const sql = 'SELECT id FROM users WHERE email = ?';
            
            return new Promise((resolve, reject) => {
                db.db.get(sql, [email], (err, row) => {
                    if (err) {
                        logger.error('Error checking user existence', { error: err.message, email });
                        reject(err);
                        return;
                    }
                    logger.info('User existence check completed', { exists: !!row, email });
                    resolve(!!row);
                });
            });
        } catch (error) {
            logger.error('Error in userExists', { error: error.message, email });
            throw error;
        } finally {
            db.close();
            logger.dbOperation('Close database connection', { operation: 'userExists' });
        }
    }

    generateAuthToken(user) {
        logger.info('Generating auth token', { userId: user.id });
        const token = jwt.sign(
            { 
                id: user.id,
                email: user.email,
                role: user.role 
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        logger.info('Auth token generated successfully', { userId: user.id });
        return token;
    }
}

module.exports = User;