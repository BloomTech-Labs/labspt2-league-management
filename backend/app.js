const express = require('express');
const axios = require('axios');
var cors = require('cors');
const app = express();
const authRouter = require('./routers/authRouter');

app.use(express.json());
app.use(cors());

const getWeather = (latitude, longitude) => {
  //   console.log(
  //     'inside getWeather',
  //     'latitude',
  //     position.coords.latitude,
  //     'longitude',
  //     position.coords.longitude
  //   );
};

const PORT = process.env.PORT || '4000';

app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.status(200).send(`API active on port: ${PORT}`);
});

app.get('/weather', async (req, res) => {
  const latitude = 43.546;
  const longitude = -92.09;
  const apiKey = process.env.DS_API_KEY || null;
  axios
    .get(`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = app;
