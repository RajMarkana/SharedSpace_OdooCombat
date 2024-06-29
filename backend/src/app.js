const express = require('express');
const mysql = require('mysql');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: "Z"
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id', connection.threadId);
});
connection.query('SELECT * FROM `users`',(error, results)=>{
    console.log(results);
})

// app.use(express.json());
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());
// app.use(cors()); // Enable CORS for all routes

// // Importing routes
// const loginRoute = require('./routes/login.js');
// const adminRoute = require('./routes/admin.js');
// const facultyRoute = require('./routes/faculty.js');
// const studentRoute = require('./routes/student.js');

// // Declaring routes
// app.use("/api", loginRoute);
// app.use("/api/admin", adminRoute);
// app.use("/api/faculty", facultyRoute);
// app.use("/api/student", studentRoute);


module.exports = app;
