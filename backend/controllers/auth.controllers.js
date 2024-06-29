const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");
require('dotenv').config();

// Create connection pool for MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

exports.signup = (req, res) => {
    try {
        // Data fetch
        const { name, email, password, role } = req.body;

        // Check for existing user
        const query = 'SELECT * FROM users WHERE email = ?';
        pool.query(query, [email], (error, results) => {
            if (error) {
                console.error('Error querying database:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (results.length > 0) {
                // User with this email already exists
                return res.status(400).json({ error: 'User already exists' });
            } else {
                // Proceed with user registration
                // Example: Hash password using bcrypt
                bcrypt.hash(password, 10, (err, hashedPassword) => {
                    if (err) {
                        console.error('Error hashing password:', err);
                        return res.status(500).json({ error: 'Internal server error' });
                    }

                    // Insert new user into database
                    const insertQuery = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
                    pool.query(insertQuery, [name, email, hashedPassword, role], (insertError, insertResults) => {
                        if (insertError) {
                            console.error('Error inserting user into database:', insertError);
                            return res.status(500).json({ error: 'Internal server error' });
                        }

                        // User successfully registered
                        return res.status(201).json({ message: 'User registered successfully' });
                    });
                });
            }
        });
    } catch (err) {
        console.error('Error in signup function:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


exports.login = (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        // Query to find user by email
        const query = 'SELECT * FROM users WHERE email = ?';
        pool.query(query, [email], (error, results) => {
            if (error) {
                console.error('Error querying database:', error);
                return res.status(500).json({ error: 'Internal server error' });
            }

            if (results.length === 0) {
                // User with this email does not exist
                return res.status(404).json({ error: 'User not found' });
            }

            const user = results[0];

            // Check if password matches using bcrypt
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.error('Error comparing passwords:', err);
                    return res.status(500).json({ error: 'Internal server error' });
                }

                if (!result) {
                    // Passwords do not match
                    return res.status(401).json({ error: 'Password incorrect' });
                }

                // Passwords match, create a JWT token
                const token = jwt.sign(
                    { userId: user.id, email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' } // Token expires in 1 hour
                );

                // Set the token as a cookie
                res.cookie('token', token, { httpOnly: true });

                // Optionally, you can return additional user information or just the token
                return res.status(200).json({ message: 'Login successful', token });
            });
        });
    } catch (err) {
        console.error('Error in login function:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};