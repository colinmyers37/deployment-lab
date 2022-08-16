const path = require('path');


module.exports = {
getLandingPage: (req, res) => {
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