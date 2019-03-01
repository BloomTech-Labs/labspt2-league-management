const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || '4000';

app.get('/', (req, res) => {
    res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;