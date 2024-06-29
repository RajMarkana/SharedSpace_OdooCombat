const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const userRoutes = require("./routes/user.routes");
app.use('/api', userRoutes)

require("./config/database").connect;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
