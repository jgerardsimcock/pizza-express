var express = require('express');
var router = express.Router();

// Index Controller
router.route('/')
  .get(function (req, res) {
    res.render('index');
  });

module.exports = router;
