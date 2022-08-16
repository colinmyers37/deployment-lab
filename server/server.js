const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('client'));

const port = process.env.PORT || 4004;

const { getLandingPage, getCss, getJs } = require ("./controller.js/controller")

app.get('/', getLandingPage)
app.get('/css', getCss)
app.get('/js', getJs)




app.listen(port,console.log(`server is running on port ${port}`));