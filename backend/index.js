const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
const userRoutes = require("./routes/user.routes");
app.use('/api', userRoutes)

// app.use(cors({
//     origin: 'http://localhost:5173/', // Adjust the origin as needed
//     credentials: true, // Allow cookies to be sent
// }));

require("./config/database").connect;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
