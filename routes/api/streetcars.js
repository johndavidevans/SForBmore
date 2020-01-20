// <app-root>/routes/api/streetcars.js
var express = require('express');
var router = express.Router();

/* GET streetcar data */
router.get('/', function(req, res) {
    res.status(200).json({ message: "I'm the streetcars route! 🚃 🚃 🚃 " });
});

module.exports = router;