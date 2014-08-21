var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var placeOrder = require('./../lib/generateOrder');
var orders = {};

// mongodb URL here
mongoose.connect('mongodb://usera:1234@ds063919.mongolab.com:63919/pizza-express');

var OrdersSchema = Schema({
  sizes: String,
  toppings: {
    meats: Array,
    veggies: Array
  }
});

var Order = mongoose.model('Order', OrdersSchema);

orders.getAllPizzaOrders = function (req, res) {
  Order.find({}, function (err, orders) {
    if (err) {
      console.log("error getting all pizzas", err); return;
    }
    res.send(orders);
  });
};

orders.generateOrders = function (req, res) {
  var newOrder = new Order(placeOrder.generate());

  newOrder.save();
};

module.exports = orders;