const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
const app = express();

app.use(cors());
app.use(bodyParser.json());
const userRoutes = require("./routes/user.routes");
app.use('/api', userRoutes)

// app.use(cors({
//     origin: 'http://localhost:5173/', // Adjust the origin as needed
//     credentials: true, // Allow cookies to be sent
// }));
=======
const dotenv = require('dotenv');
const pool = require('./config/database').connect;
const resourceRoutes = require('./routes/resources.routes');
const userRoutes = require('./routes/user.routes');
const imageUploadRoutes = require('./routes/imageUpload.routes');

dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Adjust the origin as needed
    credentials: true, // Allow cookies to be sent
}));
>>>>>>> 988718ae7efc00d305a70c7eec0dd27c64355b2e

// Middleware
app.use(bodyParser.json());

// Make pool available in requests
app.use((req, res, next) => {
    req.pool = pool;
    next();
});


// Routes
app.use('/api/users', userRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/image', imageUploadRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
