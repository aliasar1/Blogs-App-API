const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const connectDb = require('./config/dbConnection');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(errorHandler);
connectDb();

const blogRoutes = require('./routes/blogs');
app.use('/api/blogs', blogRoutes);

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
