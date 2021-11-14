var express = require('express');
var router = express.Router();
var Quiz = require('../models/quiz');
var Class = require('../models/class');
var Assignment = require('../models/assignment');
var Material = require('../models/materials');
var Quizsol = require('../models/quizsolution');
var Assignsolution = require('../models/assignmentsolution');
var Result = require('../models/results');
/* GET Operations */
router.get('/', function(req, res, next) {
  res.send('Dashboard');
});

//view all materials
router.get('/materials', function(req, res, next){
  Material.find({}).exec(function(error, results) {
    if (error) { 
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})

//view attempted quizes
router.get('/viewattquiz', function(req, res, next){
  Quizsol.find({}).exec(function(error, results) {
    if (error) { 
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})
//view attempted assignment 
router.get('/viewattassign', function(req, res, next){
  Assignsolution.find({}).exec(function(error, results) {
    if (error) { 
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})
//get attempted quiz by id
router.get('/quiz/:id', function(req, res, next) {
  Quizsol.find({ _id: req.params.id }).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

//get attempted assign by id
router.get('/assign/:id', function(req, res, next) {
  Assignsolution.find({ _id: req.params.id }).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
/* POST Operations */ 
//add quiz
router.post('/addquiz', function(req, res, next){
  Quiz.create(req.body)
  .then((quiz) => {
    console.log('Quiz has been Added ', quiz);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quiz);
  }, (err) => next(err)
  ).catch((err)=> next(err)); 
})

//add material 
router.post('/addmat', function(req, res, next){
  Material.create(req.body)
  .then((material) => {
    console.log('Material has been Added ', material);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(material);
  }, (err) => next(err)
  ).catch((err)=> next(err)); 
})
//add assignment
router.post('/addassign', function(req, res, next){
  Assignment.create(req.body)
  .then((assign) => {
    console.log('Quiz has been Added ', assign);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(assign);
  }, (err) => next(err)
  ).catch((err)=> next(err)); 
})
//add marks
router.post('/addmarks', function(req, res, next){
  Result.create(req.body)
  .then((result) => {
    console.log('Result has been Added ', result);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(result);
  }, (err) => next(err)
  ).catch((err)=> next(err)); 
})
/* PUT Operations*/ 
//update marks
//assign teacher to a class
router.put('/marks/:id', function(req, res, next) {
  Result.findOneAndUpdate({ _id: req.params.id }, { marks: req.body.marks }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});
/* DELETE OPERATIONS*/

//delete quiz
router.delete('/delquiz/:id', function(req, res, next){
  Quiz.deleteOne({ _id: req.params.id }, function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})
//delete material
router.delete('/material/:id', function(req, res, next) {
  Material.deleteOne({ _id: req.params.id }, function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

//delete assignment 
router.delete('/assignment/:id', function(req, res, next){
  Assignment.deleteOne({ _id: req.params.id }, function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})

//delete marks
router.delete('/marks/:id', function(req, res, next){
  Result.deleteOne({ _id: req.params.id }, function(error, results) {
    if (error) {
        return next(error);
    }
    // Respond with valid data
    res.json(results);
});
})

module.exports = router;
