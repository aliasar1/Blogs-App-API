const express = require('express');
const connectDb = require('./config/dbConnection');
require('dotenv').config();

const app = express();
app.use(express.json());
connectDb();

const blogRoutes = require('./routes/blogs');
app.use('/api/blogs', blogRoutes);

const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
