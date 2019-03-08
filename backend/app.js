const express = require('express');
var cors = require('cors');
const app = express();
const authRouter = require('./routers/authRouter');
const settingsRouter = require('./routers/settingsRouter');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || '4000';

app.use('/auth', authRouter);
app.use('/settings', settingsRouter);

app.get('/', (req, res) => {
    res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;


