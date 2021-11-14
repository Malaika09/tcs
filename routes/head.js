var express = require('express');
var router = express.Router();
var Class = require('../models/class');
var Material = require('../models/materials');
var Result = require('../models/results');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Show dashboard');
});

router.get('/class', function(req, res, next) {
  Class.find({}).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

//view all materials
router.get('/material', function(req, res, next){
  Material.find({}).exec(function(error, results) {
    if (error) { 
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})

//view result of class
router.get('/results/class/:id', function(req, res, next) {
  Result.find({ classid: req.params.id }).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

//view result of class
router.get('/results/student/:id', function(req, res, next) {
  Result.find({ studentid: req.params.id }).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
module.exports = router;
