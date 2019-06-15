let express = require('express');
let router = express.Router();
let products = require('./products');
let cors = require('cors');

router.use(cors());

router.get('/', (req, res) => {
  res.json({ status: 'Server is running!' })
})

router.use('/products', products);


module.exports = router;