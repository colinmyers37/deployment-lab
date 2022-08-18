const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.use(cors());
app.use(express.json());
app.use(express.static('client'));

const port = process.env.PORT || 4004;

const { getLandingPage, getCss, getJs, getPricing, getLessons } = require ("./controller.js/controller")

app.get('/Home', getLandingPage)
app.get('/css', getCss)
app.get('/js', getJs)
app.get('/Pricing', getPricing)
app.get('/Lessons', getLessons)



app.listen(port,console.log(`server is running on port ${port}`));