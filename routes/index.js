var express = require('express');
var router = express.Router();
var products = require('./products');
// var db = require('../products');

/* GET home page. */
router.use('/products', products);
