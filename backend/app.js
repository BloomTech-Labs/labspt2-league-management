const express = require('express');
const app = express();

app.use(express.json());

const PORT = '3300';

app.get('/', (req, res) => {
    res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;