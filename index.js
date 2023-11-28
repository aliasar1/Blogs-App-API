const express = require('express');
require('dotenv').config();

app = express();
app.use(express.json());

app.use('/', (req, res, next) => {
    res.send('Hello World');
});

const port = process.env.PORT || 5050;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
