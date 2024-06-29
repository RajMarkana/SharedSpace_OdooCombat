// controllers/resource.controller.js

const mysql = require('mysql');
const connection =require('../config/database.js');

exports.createResource = (req, res) => {
    const { resource_title, quality, date, category, location, availability, purchase_date, cost, image_url } = req.body;

    if (!resource_title) {
        return res.status(400).json({ error: 'Resource title is required' });
    }

    const query = 'INSERT INTO resources (resource_title, quality, date, category, location, availability, purchase_date, cost, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [resource_title, quality, date, category, location, availability, purchase_date, cost, image_url];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error inserting resource:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'Resource created successfully', resourceId: results.insertId });
    });
};

exports.getResource = (req, res) => {
    const resourceId = req.params.id;

    if (!resourceId) {
        return res.status(400).json({ error: 'Resource ID parameter is required' });
    }

    const query = 'SELECT * FROM resources WHERE id = ?';

    connection.query(query, [resourceId], (error, results) => {
        if (error) {
            console.error('Error retrieving resource:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        res.status(200).json(results[0]);
    });
};

exports.updateResource = (req, res) => {
    const resourceId = req.params.id;
    const { resource_title, quality, date, category, location, availability, purchase_date, cost, image_url } = req.body;

    if (!resourceId) {
        return res.status(400).json({ error: 'Resource ID parameter is required' });
    }

    const query = 'UPDATE resources SET resource_title=?, quality=?, date=?, category=?, location=?, availability=?, purchase_date=?, cost=?, image_url=? WHERE id=?';
    const values = [resource_title, quality, date, category, location, availability, purchase_date, cost, image_url, resourceId];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error updating resource:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json({ message: 'Resource updated successfully' });
    });
};

exports.deleteResource = (req, res) => {
    const resourceId = req.params.id;

    if (!resourceId) {
        return res.status(400).json({ error: 'Resource ID parameter is required' });
    }

    const query = 'DELETE FROM resources WHERE id = ?';

    connection.query(query, [resourceId], (error, results) => {
        if (error) {
            console.error('Error deleting resource:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json({ message: 'Resource deleted successfully' });
    });
};

// controllers/resource.controller.js

const pool = require('../config/database');

exports.getAllResources = (req, res) => {
    const query = 'SELECT * FROM resources';

    pool.query(query, (error, results) => {
        if (error) {
            console.error('Error retrieving resources:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

exports.getResourceById = (req, res) => {
    const resourceId = req.params.id;

    if (!resourceId) {
        return res.status(400).json({ error: 'Resource ID parameter is required' });
    }

    const query = 'SELECT * FROM resources WHERE id = ?';

    pool.query(query, [resourceId], (error, results) => {
        if (error) {
            console.error('Error retrieving resource:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Resource not found' });
        }
        res.status(200).json(results[0]);
    });
};
