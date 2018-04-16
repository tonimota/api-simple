let express = require('express');
let router = express.Router();
let json = require('../products');

/* GET home page. */
router.get('/', function(req, res) {
    res.json(json);
});

module.exports = router;
