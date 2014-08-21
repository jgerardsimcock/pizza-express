var express = require('express');
var router = express.Router();
var database = require('./../models/orders');

// Orders Controller
router.route('/')
  .get(function (req, res) {
    // res.send('omethin');
    console.log('orders route');
    database.getAllPizzaOrders(req, res);
  })
  .post(function (req, res) {
    // res.send('something');
  })
  .delete(function (req, res) {
    res.send("Fucking deleting orders");
  });

module.exports = router;
