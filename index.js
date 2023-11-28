const express = require('express');
require('dotenv').config();
require('./utils/db')();

app = express();
app.use(express.json());

const blogRoutes = require('./routes/blogs');

app.use('/api/blogs', blogRoutes);

const port = process.env.PORT || 5050;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
