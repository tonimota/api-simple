let express = require('express');
let router = express.Router();
let products = require('./products');
let cors = require('cors');

router.use(cors());
/* GET home page. */
router.use('/products', products);


module.exports = router;