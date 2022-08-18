const path = require('path');

require("dotenv").config()
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


module.exports = {
getLandingPage: (req, res) => {
    rollbar.log("it's working")
 res.sendFile(path.join(__dirname, '../../client/index.html'))
},
getCss: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/style.css'))
},
getJs: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/main.js'))
},
getPricing: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/pricing.html'))
},
getLessons: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/lessons.html'))
},
}