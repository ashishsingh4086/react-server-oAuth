const express = require('express');
const keys = require("./config/key");

require('./models/User');
require("./services/passport");


const authRoutes = require("./routes/authRoutes");

const mongoose= require('mongoose');
mongoose.connect(`${keys.mongoURI}`);
console.log(mongoose.connection.readyState);


const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
