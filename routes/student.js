var express = require('express');
var router = express.Router();
var Material = require('../models/materials');
var Quiz = require('../models/quiz');
var Assignment = require('../models/assignment');
var Quizsol = require('../models/quizsolution');
var Assignsolution = require('../models/assignmentsolution');
var Result = require('../models/results');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*GET Operations*/ 
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

//view material by id 
router.get('/material/:id', function(req, res, next) {
  Material.find({ _id: req.params.id }).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

//view quiz
router.get('/viewquiz', function(req, res, next){
  Quiz.find({}).populate('class.cid').exec(function(error, results) {
    if (error) { 
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})
//view assignment
router.get('/viewassignment', function(req, res, next){
  Assignment.find({}).populate('class.cid').exec(function(error, results) {
    if (error) { 
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})
//view marks and grade
router.get('/result/:id', function(req, res, next) {
  Result.find({ studentid: req.params.id }).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

/*POST Operations*/
//attempt quiz
router.post('/attemptquiz', function(req, res, next){
  Quizsol.create(req.body)
  .then((quizsol) => {
    console.log('Material has been Added ', quizsol);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quizsol);
  }, (err) => next(err)
  ).catch((err)=> next(err)); 
})
//submit assignment
router.post('/submitassignment', function(req, res, next){
  Assignsolution.create(req.body)
  .then((assignsol) => {
    console.log('Material has been Added ', assignsol);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(assignsol);
  }, (err) => next(err)
  ).catch((err)=> next(err)); 
})
module.exports = router;
