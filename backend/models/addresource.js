const mysql = require('mysql');
require('dotenv').config();

// Create connection pool for MySQL
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// SQL query to create the table
const createTableQuery = `
    CREATE TABLE resources (
        id INT AUTO_INCREMENT PRIMARY KEY,
        resource_title VARCHAR(255) NOT NULL,
        quality VARCHAR(100),
        date DATE,
        category VARCHAR(100),
        location VARCHAR(255),
        availability BOOLEAN,
        purchase_date DATE,
        cost DECIMAL(10, 2),
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
`;

pool.query(createTableQuery, (error, results) => {
    if (error) {
        console.error('Error creating table:', error);
    } else {
        console.log('Table "resources" created successfully');
    }
    pool.end();
});
