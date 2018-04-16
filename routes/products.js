var express = require('express');
var router = express.Router();
var json = require('../products');

/* GET home page. */
router.get('/', function(req, res) {
    res.json(json);
});

module.exports = router;
