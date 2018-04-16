let express = require('express');
let router = express.Router();
let json = require('../products');

router.get('/', function(req, res) {
    res.json(json);
});

module.exports = router;
